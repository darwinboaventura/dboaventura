angular.module('dboaventura', ['ngRoute', 'ngResource', 'ngSanitize'])
.config(function($routeProvider, $httpProvider) {
	$httpProvider.interceptors.push('InterceptorService');

	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/admin', {
			templateUrl: 'partials/admin/index.html',
			controller: 'HomeAdminController'
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
});