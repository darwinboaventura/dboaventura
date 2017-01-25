angular.module('dboaventura').controller('WorkAdminController', function($scope, WorkService, $routeParams) {
	// Home Works
	WorkService.query(function(works) {
		$scope.works = works;
	});

	$scope.remove = function(id) {
		if (confirm("Tem certeza que deseja excluir esse trabalho?")) {
			WorkService.delete({id: id}, function(success) {
				WorkService.query(function(works) {
					$scope.works = works;
				});
			}, function(error) {
				console.log(error);
			});
		}
	};

	// page editar
	if ($routeParams.id) {
		WorkService.get({id: $routeParams.id}, function(work) {
			$scope.work = work;
		});
	}

	$scope.save = function() {
		WorkService.save($scope.work, function(success) {
			$scope.flashMessage = {
				type: 'success',
				message: 'A página foi atualizada com sucesso'
			};
		}, function(error) {
			$scope.flashMessage = {
				type: 'error',
				message: 'Não foi possível enviar sua mensagem, tente novamente. <br /><br /> Erro: ' + error.data
			};
		});
	};
});