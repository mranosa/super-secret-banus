'use strict';

trippingIronmanApp.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
  

  $scope.sendEmail = function(){
  	$http.post('https://sendgrid.com/api/mail.send.json', {
  		api_user: 'markenranosa',
  		api_key: 'markenranosa',
  		to: 'mark.ranosa@gmail.com',
  		from: 'blah@blah.com',
  		text: 'testingtextbody',
  		subject: 'email test'
  	}).success(function(result){
  		console.log(result);
  	});
  }

}]);
