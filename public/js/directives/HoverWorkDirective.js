angular.module('dboaventura').directive('hoverWork', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			element.hover(function() {
				element.children('.it-hover').css('display', 'block').addClass('bounceIn');
			}, function() {
				element.children('.it-hover').css('display', 'none').removeClass('bounceIn');
			});
		}
	};
});