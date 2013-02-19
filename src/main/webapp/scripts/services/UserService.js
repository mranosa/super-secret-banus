'use strict';

trippingIronmanApp.factory('UserService', function() {
  
  var usersRef = new Firebase('https://nci.firebaseio.com/users/');

  var NotificationService = function() {
    
  };

  NotificationService.prototype = {
    get: function(username){
		var userRef = new Firebase('https://nci.firebaseio.com/users/' + username);

		userRef.once('value', function(dataSnapshot) {
			console.log(dataSnapshot);
			console.log(dataSnapshot.val());
			return dataSnapshot;
		});
    }
  };

  return new NotificationService();
});
