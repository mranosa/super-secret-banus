'use strict';

trippingIronmanApp.controller('LoginCtrl', ['$scope', 'UserService', function($scope, UserService) {

	console.log(UserService.get('mranosa'));
	console.log(UserService.get('mranosa2'));
}]);
