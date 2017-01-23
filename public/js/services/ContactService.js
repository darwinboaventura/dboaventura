angular.module('dboaventura').factory('ContactService', function($resource) {
	return $resource('/contact/:id');
});