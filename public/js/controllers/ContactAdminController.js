angular.module('dboaventura').controller('ContactAdminController', function($scope, ContactService, $routeParams) {
	// Home Contacts
	ContactService.query(function(contacts) {
		$scope.contacts = contacts;
	});
});