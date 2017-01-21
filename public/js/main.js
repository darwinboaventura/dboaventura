angular.module('dboaventura', ['ngRoute', 'ngResource'])
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