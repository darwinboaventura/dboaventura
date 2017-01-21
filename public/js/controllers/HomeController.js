angular.module('dboaventura').controller('HomeController', function($scope, PageService, WorkService) {
	PageService.get({id: "5882a1ff36d2f9784cf03124"}, function(page) {
		$scope.page = page;
	});

	WorkService.query(function(works) {
		$scope.works = works;
	});
});