angular.module('dboaventura').directive('smoothScroll', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			element.click(function() {
				var target = $(element.attr('href'));

				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			});
		}
	};
});