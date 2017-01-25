angular.module('dboaventura').controller('PageAdminController', function($scope, PageService, $routeParams) {
	PageService.query(function(pages) {
		$scope.pages = pages;
	});

	if ($routeParams.id) {
		PageService.get({id: $routeParams.id}, function(page) {
			$scope.page = page;
		});
	}
});