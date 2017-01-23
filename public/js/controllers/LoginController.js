angular.module('dboaventura').controller('LoginController', function($scope, AdminService) {
	$scope.admin = {};

	$scope.makeLogin = function() {
		var login = AdminService.login($scope.admin);

		console.log(login);
	};
});