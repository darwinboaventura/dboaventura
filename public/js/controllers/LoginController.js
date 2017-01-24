angular.module('dboaventura').controller('LoginController', function($scope, AdminService, $location) {
	$scope.admin = {};

	$scope.makeLogin = function() {
		AdminService.login($scope.admin).then(function(response) {
			if (response.status == 401) {
				$location.path('/admin/login');
			} else if (response.status == 200) {
				$location.path('/admin');
			}
		});
	};

	// Logout
	if ($location.path() == '/admin/logout') {
		AdminService.logout().then(function(response) {
			if (response.status == 401) {
				console.log('Um erro ocorreu, não foi possível efeturar o logout.');
				$location.path('/admin');
			} else if (response.status == 200) {
				$location.path('/admin/login');
			}
		}, function(response) {
			console.log(response);
		});
	}
});