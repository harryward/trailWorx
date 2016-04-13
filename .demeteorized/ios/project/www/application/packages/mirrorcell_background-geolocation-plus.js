(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var BackgroundLocation;

(function(){

////////////////////////////////////////////////////////////////////////////////////
//                                                                                //
// packages/mirrorcell_background-geolocation-plus/background-geolocation-plus.js //
//                                                                                //
////////////////////////////////////////////////////////////////////////////////////
                                                                                  //
var _options = {                                                                  // 1
    fetchLocationOnStart : true                                                   // 2
};                                                                                // 3
                                                                                  // 4
BackgroundLocation = {                                                            // 5
    tag : 'BackgroundLocation',                                                   // 6
    plugin : null,                                                                // 7
    started : false,                                                              // 8
    hasLocationCallback : false,                                                  // 9
    options : _options,                                                           // 10
    config : {                                                                    // 11
        desiredAccuracy: 1,                                                       // 12
        distanceFilter: 1,                                                        // 13
        debug: false,                                                             // 14
        interval: 1000,                                                           // 15
        //Android Only                                                            // 16
        notificationTitle: 'BG Plugin',                                           // 17
        notificationText: 'Tracking',                                             // 18
        fastestInterval: 5000,                                                    // 19
        useActivityDetection: false                                               // 20
    },                                                                            // 21
    getPlugin: function() {                                                       // 22
        this.plugin = window.plugins.backgroundLocationServices;                  // 23
    },                                                                            // 24
    havePlugin : function() {                                                     // 25
        if(!this.plugin) {                                                        // 26
            throw new Meteor.Error(this.tag, 'Could not find the background location plugin, please run BackgroundLocation.getPlugin');
            return false;                                                         // 28
        }                                                                         // 29
        return true;                                                              // 30
    },                                                                            // 31
    configure: function(config) {                                                 // 32
        if(!this.havePlugin()) return;                                            // 33
                                                                                  // 34
        if(_.isObject(config)) {                                                  // 35
            this.config = config;                                                 // 36
            this.plugin.configure(this.config);                                   // 37
        } else {                                                                  // 38
            throw new Meteor.Error(this.tag, 'Config parameter must be a object')
        }                                                                         // 40
    },                                                                            // 41
    registerForLocationUpdates: function(success, failure){                       // 42
        if(!this.havePlugin()) return;                                            // 43
                                                                                  // 44
        this.hasLocationCallback = true;                                          // 45
        this.plugin.registerForLocationUpdates(success, failure);                 // 46
    },                                                                            // 47
    registerForActivityUpdates: function(success, failure){                       // 48
        if(!this.havePlugin()) return;                                            // 49
                                                                                  // 50
        this.plugin.registerForActivityUpdates(success, failure);                 // 51
    },                                                                            // 52
    start: function() {                                                           // 53
        if(!this.havePlugin()) return;                                            // 54
                                                                                  // 55
        if(!this.hasLocationCallback) {                                           // 56
            throw new Meteor.Error(this.tag, 'You must register for location updates before starting background location updates');
        }                                                                         // 58
                                                                                  // 59
        this.plugin.start();                                                      // 60
                                                                                  // 61
    },                                                                            // 62
    stop: function() {                                                            // 63
        if(!this.havePlugin()) return;                                            // 64
                                                                                  // 65
        this.plugin.stop();                                                       // 66
    }                                                                             // 67
};                                                                                // 68
                                                                                  // 69
if(Meteor.isCordova) {                                                            // 70
    Meteor.startup(function () {                                                  // 71
        BackgroundLocation.getPlugin();                                           // 72
                                                                                  // 73
        if(BackgroundLocation.options.fetchLocationOnStart) {                     // 74
            navigator.geolocation.getCurrentPosition(function (location) {        // 75
            }, function (err) {                                                   // 76
            });                                                                   // 77
        }                                                                         // 78
    });                                                                           // 79
}                                                                                 // 80
////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mirrorcell:background-geolocation-plus'] = {}, {
  BackgroundLocation: BackgroundLocation
});

})();
