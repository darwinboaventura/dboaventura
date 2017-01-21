angular.module('dboaventura').factory('PageService', function($resource) {
	return $resource('/page/:id');
});