

if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        console.log('server is started!')
    });
}