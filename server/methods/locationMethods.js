Meteor.methods({
    'updateLocation':function(userLocation){
        var self = this;
        if(self.userId){
            console.log(JSON.stringify(userLocation));
            return Meteor.users.update({'_id':self.userId},{
                $set:{
                    'profile.backgroundLocation':userLocation
                }
            })
        }
    }
})