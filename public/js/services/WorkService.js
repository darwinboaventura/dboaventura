angular.module('dboaventura').factory('WorkService', function($resource) {
	return $resource('/work/:id');
});