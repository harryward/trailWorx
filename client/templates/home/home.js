Template.home.helpers({
    preme:function(preStuff){
        return EJSON.stringify(preStuff,{'indent':true});
    },
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded() && Session.get('myLoc')) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(Session.get('myLoc').lat, Session.get('myLoc').lng),
                zoom: 19,
                styles:[{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#7f2200"},{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#87ae79"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#495421"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":4.1}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#abce83"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#769E72"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#7B8758"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#EBF4A4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#8dab68"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#5B5B3F"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ABCE83"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#EBF4A4"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"weight":"0.56"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"weight":"0.50"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#d8d385"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"weight":"0.18"},{"lightness":"21"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#A4C67D"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aee2e0"}]}]
            };
        }
    }
});

Template.home.events({
    'click .markSpot':function(event,template){
        event.preventDefault();
        alert('marking spot: ' + Session.get('myLoc').lat + ', '+Session.get('myLoc').lng)
    }
});

Template.home.onCreated(function () {

    var self = this;

    Tracker.autorun(function(){
        if(!Session.get('myLoc')){
            Session.set('myLoc',Geolocation.latLng())

            GoogleMaps.ready('exampleMap', function(map) {
                var marker;

                // Create and move the marker when latLng changes.
                self.autorun(function() {
                    var latLng = {
                        lat:Meteor.user().profile.backgroundLocation.latitude,
                        lng:Meteor.user().profile.backgroundLocation.longitude
                    }

                    if (! latLng)
                        return;

                    // If the marker doesn't yet exist, create it.
                    if (! marker) {
                        console.log('adding marker..')
                        marker = new google.maps.Marker({
                            position: new google.maps.LatLng(latLng.lat, latLng.lng),
                            map: map.instance,
                        });

                    }
                    // The marker already exists, so we'll just change its position.
                    else {
                        console.log('updating market position..')
                        marker.setPosition(latLng);
                    }

                    // Center and zoom the map view onto the current position.
                    map.instance.setCenter(marker.getPosition());
                    //map.instance.setZoom(MAP_ZOOM);



                });

            });
        }
    })

    //Tracker.autorun(function(){
    //    if(!Session.get('myLoc')){
    //        Session.set('myLoc',Geolocation.latLng());
    //        console.log('getting the location..');
    //    }else{
    //        console.log('got location', Session.get('myLoc'));
    //
    //        // We can use the `ready` callback to interact with the map API once the map is ready.
    //
    //
    //    }
    //})
});

Template.home.onRendered(function () {
    //add your statement here
    Session.set('myLoc',false)
});

Template.home.onDestroyed(function () {
    //add your statement here
});

