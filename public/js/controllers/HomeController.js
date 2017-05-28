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
				message: 'Your message was sent! I\'ll reach you back as soon as possible.'
			};

			$scope.contact = {};
		}, function(error) {
			$scope.flashMessage = {
				type: 'error',
				message: 'Erro, please try again.'
			};

			console.log(error);
		});
	};
});