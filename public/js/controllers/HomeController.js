angular.module('dboaventura').controller('HomeController', function($scope, PageService, WorkService, ContactService) {
	PageService.get({id: "588552b8650d2265ef1fd5e5"}, function(page) {
		$scope.page = page;
	});

	WorkService.query(function(works) {
		$scope.works = works;
	});

	$scope.processContactForm = function() {
		ContactService.save($scope.contact, function() {
			$scope.flashMessage = {
				type: 'success',
				message: 'Sua mensagem foi enviada com sucesso'
			};

			$scope.contact = {};
		}, function(error) {
			$scope.flashMessage = {
				type: 'error',
				message: 'Não foi possível enviar sua mensagem, tente novamente.'
			};

			console.log(error);
		});
	};
});