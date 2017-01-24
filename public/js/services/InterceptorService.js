angular.module('dboaventura').factory('InterceptorService', function($location, $q) {
	return {
		responseError: function(res) {
			if (res.status == 401) {
				$location.path('/admin/login');
			}

			return $q.reject(res);
		}
	};
});