angular.module('dboaventura').controller('PageAdminController', function($scope, PageService, $routeParams) {
	// Home Pages
	PageService.query(function(pages) {
		$scope.pages = pages;
	});

	$scope.remove = function(id) {
		if (confirm("Tem certeza que deseja excluir essa página?")) {
			PageService.delete({id: id}, function(success) {
				PageService.query(function(pages) {
					$scope.pages = pages;
				});
			}, function(error) {
				console.log(error);
			});
		}
	};

	// page editar
	if ($routeParams.id) {
		PageService.get({id: $routeParams.id}, function(page) {
			$scope.page = page;
		});
	}

	$scope.save = function() {
		PageService.save($scope.page, function(success) {
			$scope.flashMessage = {
				type: 'success',
				message: 'A página foi atualizada com sucesso'
			};
		}, function(error) {
			$scope.flashMessage = {
				type: 'error',
				message: 'Não foi possível enviar sua mensagem, tente novamente. <br /><br /> Erro: ' + error.data
			};

			console.log(error);
		});
	};
});