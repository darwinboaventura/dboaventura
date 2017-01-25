angular.module('dboaventura').controller('PageAdminController', function($scope, PageService, $routeParams) {
	// Home Pages
	PageService.query(function(pages) {
		$scope.pages = pages;
	});

	// page editar
	if ($routeParams.id) {
		PageService.get({id: $routeParams.id}, function(page) {
			$scope.page = page;
		});

		$scope.updatePage = function() {
			PageService.save($scope.page, function() {
				$scope.flashMessage = {
					type: 'success',
					message: 'A página foi atualizada com sucesso'
				};
			}, function(error) {
				$scope.flashMessage = {
					type: 'error',
					message: 'Não foi possível enviar sua mensagem, tente novamente.'
				};

				console.log(error);
			});
		};
	}
});