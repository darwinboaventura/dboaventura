angular.module('dboaventura').controller('HomeAdminController', function($scope, ContactService) {
	ContactService.query(function(contacts) {
		$scope.contacts = contacts;
	});
});