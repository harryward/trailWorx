var require = meteorInstall({"client":{"templates":{"home":{"home.html":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/templates/home/template.home.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("home");                                                                                        // 2
Template["home"] = new Template("Template.home", (function() {                                                       // 3
  var view = this;                                                                                                   // 4
  return HTML.DIV({                                                                                                  // 5
    "class": "container"                                                                                             // 6
  }, "\n\n\n        ", Blaze.If(function() {                                                                         // 7
    return Spacebars.call(view.lookup("currentUser"));                                                               // 8
  }, function() {                                                                                                    // 9
    return [ "\n            ", HTML.DIV({                                                                            // 10
      "class": "panel panel-default"                                                                                 // 11
    }, "\n                ", HTML.DIV({                                                                              // 12
      "class": "panel-heading"                                                                                       // 13
    }, "\n                    ", HTML.DIV({                                                                          // 14
      "class": "panel-title"                                                                                         // 15
    }, "\n                        Global Map\n                    "), "\n                "), "\n                ", HTML.DIV({
      "class": "panel-body"                                                                                          // 17
    }, "\n", HTML.PRE("// background location\n    ", Blaze.If(function() {                                          // 18
      return Spacebars.call(Spacebars.dot(view.lookup("currentUser"), "profile", "backgroundLocation"));             // 19
    }, function() {                                                                                                  // 20
      return Blaze.View("lookup:preme", function() {                                                                 // 21
        return Spacebars.mustache(view.lookup("preme"), Spacebars.dot(view.lookup("currentUser"), "profile", "backgroundLocation"));
      });                                                                                                            // 23
    }, function() {                                                                                                  // 24
      return "nothing yet..";                                                                                        // 25
    }), "\n"), "\n                    ", HTML.DIV({                                                                  // 26
      "class": "map-container"                                                                                       // 27
    }, "\n                        ", Blaze._TemplateWith(function() {                                                // 28
      return {                                                                                                       // 29
        name: Spacebars.call("exampleMap"),                                                                          // 30
        options: Spacebars.call(view.lookup("exampleMapOptions"))                                                    // 31
      };                                                                                                             // 32
    }, function() {                                                                                                  // 33
      return Spacebars.include(view.lookupTemplate("googleMap"));                                                    // 34
    }), "\n                    "), "\n                "), "\n                ", HTML.DIV({                           // 35
      "class": "panel-footer"                                                                                        // 36
    }, "\n                    ", HTML.DIV({                                                                          // 37
      "class": "btn btn-default markSpot"                                                                            // 38
    }, HTML.I({                                                                                                      // 39
      "class": "fa fa-map-marker"                                                                                    // 40
    }, " "), " Mark Spot"), "\n                "), "\n            "), "\n        " ];                                // 41
  }, function() {                                                                                                    // 42
    return [ "\n            ", HTML.DIV({                                                                            // 43
      "class": "loginForm"                                                                                           // 44
    }, "\n                ", Spacebars.include(view.lookupTemplate("atForm")), "\n            "), "\n        " ];    // 45
  }), "\n    ");                                                                                                     // 46
}));                                                                                                                 // 47
                                                                                                                     // 48
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/templates/home/home.js                                                                                     //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.home.helpers({                                                                                              // 1
    preme: function () {                                                                                             // 2
        function preme(preStuff) {                                                                                   // 2
            return EJSON.stringify(preStuff, { 'indent': true });                                                    // 3
        }                                                                                                            //
                                                                                                                     //
        return preme;                                                                                                //
    }(),                                                                                                             //
    exampleMapOptions: function () {                                                                                 // 5
        function exampleMapOptions() {                                                                               // 5
            // Make sure the maps API has loaded                                                                     //
            if (GoogleMaps.loaded() && Session.get('myLoc')) {                                                       // 7
                // Map initialization options                                                                        //
                return {                                                                                             // 9
                    center: new google.maps.LatLng(Session.get('myLoc').lat, Session.get('myLoc').lng),              // 10
                    zoom: 19,                                                                                        // 11
                    styles: [{ "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#7f2200" }, { "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#87ae79" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#495421" }] }, { "featureType": "administrative", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }, { "visibility": "on" }, { "weight": 4.1 }] }, { "featureType": "administrative.neighborhood", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#abce83" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#769E72" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#7B8758" }] }, { "featureType": "poi", "elementType": "labels.text.stroke", "stylers": [{ "color": "#EBF4A4" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }, { "color": "#8dab68" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#5B5B3F" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ABCE83" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#EBF4A4" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "weight": "0.56" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "weight": "0.50" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#d8d385" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "weight": "0.18" }, { "lightness": "21" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#A4C67D" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#aee2e0" }] }]
                };                                                                                                   //
            }                                                                                                        //
        }                                                                                                            //
                                                                                                                     //
        return exampleMapOptions;                                                                                    //
    }()                                                                                                              //
});                                                                                                                  //
                                                                                                                     //
Template.home.events({                                                                                               // 18
    'click .markSpot': function () {                                                                                 // 19
        function clickMarkSpot(event, template) {                                                                    // 19
            event.preventDefault();                                                                                  // 20
            alert('marking spot: ' + Session.get('myLoc').lat + ', ' + Session.get('myLoc').lng);                    // 21
        }                                                                                                            //
                                                                                                                     //
        return clickMarkSpot;                                                                                        //
    }()                                                                                                              //
});                                                                                                                  //
                                                                                                                     //
Template.home.onCreated(function () {                                                                                // 25
                                                                                                                     //
    var self = this;                                                                                                 // 27
                                                                                                                     //
    Tracker.autorun(function () {                                                                                    // 29
        if (!Session.get('myLoc')) {                                                                                 // 30
            Session.set('myLoc', Geolocation.latLng());                                                              // 31
                                                                                                                     //
            GoogleMaps.ready('exampleMap', function (map) {                                                          // 33
                var marker;                                                                                          // 34
                                                                                                                     //
                google.maps.event.addListener(map.instance, 'click', function (event) {                              // 36
                    console.log(event);                                                                              // 37
                    var zonename = prompt('enter zone name');                                                        // 38
                    if (zonename) {                                                                                  // 39
                        console.log('click event', { "coordinates": [parseFloat(event.latLng.lng()), parseFloat(event.latLng.lat())] });
                        //Zones.insert({                                                                             //
                        //    "date":new Date(),                                                                     //
                        //    "zone":zonename,                                                                       //
                        //    "location": {"coordinates":[parseFloat(event.latLng.lng()),parseFloat(event.latLng.lat())]}
                        //})                                                                                         //
                    } else {}                                                                                        // 39
                });                                                                                                  //
                                                                                                                     //
                // Create and move the marker when latLng changes.                                                   //
                self.autorun(function () {                                                                           // 33
                    var latLng = Geolocation.latLng();                                                               // 53
                    if (!latLng) return;                                                                             // 54
                                                                                                                     //
                    // If the marker doesn't yet exist, create it.                                                   //
                    if (!marker) {                                                                                   // 52
                        marker = new google.maps.Marker({                                                            // 59
                            position: new google.maps.LatLng(latLng.lat, latLng.lng),                                // 60
                            map: map.instance                                                                        // 61
                        });                                                                                          //
                    }                                                                                                //
                    // The marker already exists, so we'll just change its position.                                 //
                    else {                                                                                           // 58
                            console.log('updating market position..');                                               // 67
                            marker.setPosition(latLng);                                                              // 68
                        }                                                                                            //
                                                                                                                     //
                    // Center and zoom the map view onto the current position.                                       //
                    map.instance.setCenter(marker.getPosition());                                                    // 52
                    //map.instance.setZoom(MAP_ZOOM);                                                                //
                });                                                                                                  //
            });                                                                                                      // 52
        }                                                                                                            //
    });                                                                                                              //
                                                                                                                     //
    //Tracker.autorun(function(){                                                                                    //
    //    if(!Session.get('myLoc')){                                                                                 //
    //        Session.set('myLoc',Geolocation.latLng());                                                             //
    //        console.log('getting the location..');                                                                 //
    //    }else{                                                                                                     //
    //        console.log('got location', Session.get('myLoc'));                                                     //
    //                                                                                                               //
    //        // We can use the `ready` callback to interact with the map API once the map is ready.                 //
    //                                                                                                               //
    //                                                                                                               //
    //    }                                                                                                          //
    //})                                                                                                             //
});                                                                                                                  // 25
                                                                                                                     //
Template.home.onRendered(function () {                                                                               // 97
    //add your statement here                                                                                        //
    Session.set('myLoc', false);                                                                                     // 99
});                                                                                                                  //
                                                                                                                     //
Template.home.onDestroyed(function () {                                                                              // 102
    //add your statement here                                                                                        //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"globalLayout.html":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/template.globalLayout.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("globalLayout");                                                                                // 2
Template["globalLayout"] = new Template("Template.globalLayout", (function() {                                       // 3
  var view = this;                                                                                                   // 4
  return [ HTML.Raw('<div class="container">\n        <div class="text-center">\n            <img class="siteBrand" src="/logo.png" style="max-width:100%" alt="">\n        </div>\n    </div>\n    '), Blaze._TemplateWith(function() {
    return {                                                                                                         // 6
      template: Spacebars.call(view.lookup("main"))                                                                  // 7
    };                                                                                                               // 8
  }, function() {                                                                                                    // 9
    return Spacebars.include(function() {                                                                            // 10
      return Spacebars.call(Template.__dynamic);                                                                     // 11
    });                                                                                                              // 12
  }) ];                                                                                                              // 13
}));                                                                                                                 // 14
                                                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.html":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/template.main.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.body.addContent((function() {                                                                               // 2
  var view = this;                                                                                                   // 3
  return "";                                                                                                         // 4
}));                                                                                                                 // 5
Meteor.startup(Template.body.renderToDocument);                                                                      // 6
                                                                                                                     // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/templating","meteor/reactive-var",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _templating = require('meteor/templating');                                                                      // 1
                                                                                                                     //
var _reactiveVar = require('meteor/reactive-var');                                                                   // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"both":{"accountsConfig.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// both/accountsConfig.js                                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     //
mySubmitFunc = function mySubmitFunc(error, state) {                                                                 // 2
    if (!error) {                                                                                                    // 3
        if (state === "signIn") {                                                                                    // 4
            //window.location.reload()                                                                               //
            return true;                                                                                             // 6
        }                                                                                                            //
        if (state === "signUp") {                                                                                    // 9
            return true;                                                                                             // 10
            // Successfully registered                                                                               //
            //FlowRouter.go('/settings/'+Meteor.user()._id)                                                          //
        }                                                                                                            //
    }                                                                                                                // 9
};                                                                                                                   //
                                                                                                                     //
AccountsTemplates.configure({                                                                                        // 22
    // Behavior                                                                                                      //
    confirmPassword: false,                                                                                          // 24
    enablePasswordChange: true,                                                                                      // 25
    forbidClientAccountCreation: false,                                                                              // 26
    overrideLoginErrors: true,                                                                                       // 27
    sendVerificationEmail: false,                                                                                    // 28
    lowercaseUsername: false,                                                                                        // 29
    focusFirstInput: false,                                                                                          // 30
    socialLoginStyle: 'redirect',                                                                                    // 31
                                                                                                                     //
    // Appearance                                                                                                    //
    showAddRemoveServices: false,                                                                                    // 34
    showForgotPasswordLink: false,                                                                                   // 35
    showLabels: true,                                                                                                // 36
    showPlaceholders: true,                                                                                          // 37
    showResendVerificationEmailLink: false,                                                                          // 38
                                                                                                                     //
    // Client-side Validation                                                                                        //
    continuousValidation: false,                                                                                     // 42
    negativeFeedback: false,                                                                                         // 43
    negativeValidation: true,                                                                                        // 44
    positiveValidation: true,                                                                                        // 45
    positiveFeedback: true,                                                                                          // 46
    showValidating: true,                                                                                            // 47
                                                                                                                     //
    // Privacy Policy and Terms of Use                                                                               //
    //privacyUrl: 'privacy',                                                                                         //
    //termsUrl: 'terms-of-use',                                                                                      //
                                                                                                                     //
    // Redirects                                                                                                     //
    //homeRoutePath: '/',                                                                                            //
    //redirectTimeout: 4000,                                                                                         //
                                                                                                                     //
    // Hooks                                                                                                         //
    //onLogoutHook: myLogoutFunc,                                                                                    //
    //onSubmitHook: mySubmitFunc,                                                                                    //
    //preSignUpHook: myPreSubmitFunc,                                                                                //
    hideSignInLink: false,                                                                                           // 61
    hideSignUpLink: false,                                                                                           // 62
    // Texts                                                                                                         //
    texts: {                                                                                                         // 64
        title: {                                                                                                     // 65
            changePwd: "Password Title",                                                                             // 66
            enrollAccount: "Enroll Title",                                                                           // 67
            forgotPwd: "Forgot Pwd Title",                                                                           // 68
            resetPwd: "Reset Pwd Title",                                                                             // 69
            signIn: "Sign In",                                                                                       // 70
            signUp: "Create Your Account",                                                                           // 71
            verifyEmail: "Verify Email Title"                                                                        // 72
                                                                                                                     //
        },                                                                                                           //
        errors: {                                                                                                    // 75
            accountsCreationDisabled: "Client side accounts creation is disabled!!!",                                // 76
            cannotRemoveService: "Cannot remove the only active service!",                                           // 77
            captchaVerification: "Captcha verification failed!",                                                     // 78
            loginForbidden: "error.accounts.Incorrect username or password",                                         // 79
            mustBeLoggedIn: "error.accounts.Must be logged in",                                                      // 80
            pwdMismatch: "error.pwdsDontMatch",                                                                      // 81
            validationErrors: "Validation Errors",                                                                   // 82
            verifyEmailFirst: "Please verify your email first. Check the email and follow the link!"                 // 83
        }                                                                                                            //
    }                                                                                                                //
});                                                                                                                  //
                                                                                                                     //
//AccountsTemplates.addField({                                                                                       //
//    _id: "address",                                                                                                //
//    type: "text",                                                                                                  //
//    required:true,                                                                                                 //
//    // Options object with custom properties for my layout. At the moment, there are                               //
//    // no special properties; it is up the developer to invent them                                                //
//    options: {                                                                                                     //
//        // Put a divider before this field                                                                         //
//        dividerBefore: true,                                                                                       //
//                                                                                                                   //
//    }                                                                                                              //
//});                                                                                                                //
                                                                                                                     //
//var pwd = AccountsTemplates.removeField('password');                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"backgroundLocations.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// both/backgroundLocations.js                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
//Only start if this is a cordova project                                                                            //
if (Meteor.isCordova) {                                                                                              // 2
    //Only run commands after cordova has finished device Ready                                                      //
    Meteor.startup(function () {                                                                                     // 4
        //Configure Plugin                                                                                           //
        BackgroundLocation.configure({                                                                               // 6
            desiredAccuracy: 5, // Desired Accuracy of the location updates (lower = more accurate).                 // 7
            distanceFilter: 1, // (Meters) Distance between points aquired.                                          // 8
            debug: false, // Show debugging info on device.                                                          // 9
            interval: 9000, // (Milliseconds) Requested Interval in between location updates.                        // 10
            //[Android Only Below]                                                                                   //
            notificationTitle: 'BG Plugin', // Customize the title of the notification.                              // 12
            notificationText: 'Tracking', // Customize the text of the notification.                                 // 13
            fastestInterval: 5000, //(Milliseconds) - Fastest interval OS will give updates.                         // 14
            useActivityDetection: true // Shuts off GPS when your phone is still, increasing battery life enormously
        });                                                                                                          // 6
                                                                                                                     //
        //Register a callback for location updates.                                                                  //
        //this is where location objects will be sent in the background                                              //
        BackgroundLocation.registerForLocationUpdates(function (location) {                                          // 4
                                                                                                                     //
            console.log("We got a Background Update" + JSON.stringify(location));                                    // 22
                                                                                                                     //
            Meteor.call('updateLocation', location);                                                                 // 24
        }, function (err) {                                                                                          //
            console.log("Error: Didnt get an update", err);                                                          // 27
        });                                                                                                          //
                                                                                                                     //
        //Start the Background Tracker.                                                                              //
        //When you enter the background tracking will start.                                                         //
        BackgroundLocation.start();                                                                                  // 4
                                                                                                                     //
        ///later, to stop                                                                                            //
        //BackgroundLocation.stop();                                                                                 //
    });                                                                                                              //
}                                                                                                                    // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// both/routes.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     //
FlowRouter.route('/', {                                                                                              // 2
    // do some action for this route                                                                                 //
    action: function () {                                                                                            // 4
        function action(params, queryParams) {                                                                       // 4
            console.log("Params:", params);                                                                          // 5
            console.log("Query Params:", queryParams);                                                               // 6
            BlazeLayout.render('globalLayout', { main: 'home' });                                                    // 7
        }                                                                                                            //
                                                                                                                     //
        return action;                                                                                               //
    }()                                                                                                              //
                                                                                                                     //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// both/startup.js                                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     //
                                                                                                                     //
if (Meteor.isClient) {                                                                                               // 3
    Meteor.startup(function () {                                                                                     // 4
        GoogleMaps.load();                                                                                           // 5
    });                                                                                                              //
}                                                                                                                    //
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 9
    Meteor.startup(function () {                                                                                     // 10
        console.log('server is started!');                                                                           // 11
    });                                                                                                              //
}                                                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css"]});
require("./client/templates/home/home.html");
require("./client/globalLayout.html");
require("./client/main.html");
require("./client/templates/home/home.js");
require("./both/accountsConfig.js");
require("./both/backgroundLocations.js");
require("./both/routes.js");
require("./both/startup.js");
require("./client/main.js");