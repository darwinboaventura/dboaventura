angular.module('dboaventura').controller('HomeController', function($scope, PageService, WorkService) {
	PageService.get({id: "588552b8650d2265ef1fd5e5"}, function(page) {
		$scope.page = page;
	});

	WorkService.query(function(works) {
		$scope.works = works;
	});
});