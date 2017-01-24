angular.module('dboaventura').factory('AdminService', function($http) {
	return {
		login: function(data) {
			return $http.post('/auth/login', data).then(function(response) {
				return response;
			}, function(response) {
				return response;
			});
		},
		logout: function() {
			return $http.get('/auth/logout').then(function(response) {
				return response;
			}, function(response) {
				return response;
			});
		}
	};
});