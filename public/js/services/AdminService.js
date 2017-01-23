angular.module('dboaventura').factory('AdminService', function($http) {
	return {
		login: function(data) {
			$http.post("/auth/login", data).then(function(sucesso) {
				return sucesso;
			}, function(error) {
				return error;
			});
		}
	};
});