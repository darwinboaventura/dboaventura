angular.module('dboaventura', ['ngRoute', 'ngResource', 'ngSanitize'])
.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/admin', {
			templateUrl: 'partials/admin/index.html',
			controller: 'HomeAdminController',
			resolve: {
				access: function(AuthService) {
					return AuthService.isAuthenticated();
				}
			}
		})
		.when('/admin/login', {
			templateUrl: 'partials/admin/login.html',
			controller: 'LoginController'
		}).when('/admin/logout', {
			templateUrl: 'partials/admin/login.html',
			controller: 'LoginController'
		})
		.otherwise({
			redirectTo: '/'
		});
})
.run(function ($rootScope, $location) {
	$rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
		switch (rejection) {
			case 401:
				$location.path('/admin/login');
			break;

			default:
				$log.warn("$stateChangeError event catched");
			break;
		}
	});

});