angular.module('dboaventura').factory('AuthService', function($q, $rootScope) {
	return {
		isAuthenticated: function() {
			var user = window.sessionStorage.getItem('user');

			if (user) {
				return 200;
			} else {
				return $q.reject(401);
			}
		}
	};
});

angular.module('dboaventura').factory('UnauthorazedInterceptor', function($location, $q) {
	var interceptor = {
		responseError: function(resposta) {
			if (resposta.status == 401) {
				$location.path('/admin/login');
			}

			return $q.reject(resposta);
		}
	};

	return interceptor;
});