angular.module('dboaventura', ['ngRoute', 'ngResource', 'ngSanitize'])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.otherwise({
			redirectTo: '/'
		});
});