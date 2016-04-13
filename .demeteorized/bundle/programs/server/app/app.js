var require = meteorInstall({"server":{"methods":{"locationMethods.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/methods/locationMethods.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.methods({                                                                                                     // 1
    'updateLocation': function () {                                                                                  // 2
        function updateLocation(userLocation) {                                                                      // 2
            var self = this;                                                                                         // 3
            if (self.userId) {                                                                                       // 4
                console.log(JSON.stringify(userLocation));                                                           // 5
                return Meteor.users.update({ '_id': self.userId }, {                                                 // 6
                    $set: {                                                                                          // 7
                        'profile.backgroundLocation': userLocation                                                   // 8
                    }                                                                                                //
                });                                                                                                  //
            }                                                                                                        //
        }                                                                                                            //
                                                                                                                     //
        return updateLocation;                                                                                       //
    }()                                                                                                              //
});                                                                                                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"main.js":["meteor/meteor",function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// server/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _meteor = require('meteor/meteor');                                                                              // 1
                                                                                                                     //
_meteor.Meteor.startup(function () {                                                                                 // 3
  // code to run on server at startup                                                                                //
});                                                                                                                  //
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

}}},{"extensions":[".js",".json"]});
require("./server/methods/locationMethods.js");
require("./both/accountsConfig.js");
require("./both/backgroundLocations.js");
require("./both/routes.js");
require("./both/startup.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
