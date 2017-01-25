angular.module('dboaventura').factory('AuthService', function($q, $rootScope) {
	return {
		isAuthenticated: function() {
			var user = window.localStorage.getItem('user');

			if (user) {
				return 200;
			} else {
				return $q.reject(401);
			}
		}
	};
});