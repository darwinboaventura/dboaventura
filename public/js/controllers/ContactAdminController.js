angular.module('dboaventura').controller('ContactAdminController', function($scope, ContactService, $routeParams) {
	// Home Contacts
	ContactService.query(function(contacts) {
		$scope.contacts = contacts;
	});

	// Contact editar
	if ($routeParams.id) {
		ContactService.get({id: $routeParams.id}, function(contact) {
			$scope.contact = contact;
			$scope.contact.seen = '1';

			ContactService.save($scope.contact, function(success) {
				console.log("O visto foi atualizado");
			}, function(error) {
				console.log(error.data);
			});
		});
	}
});