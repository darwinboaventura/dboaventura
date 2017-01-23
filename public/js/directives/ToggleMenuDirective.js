angular.module('dboaventura').directive('toggleMenu', function() {
	return {
		restrict: 'C',
		link: function(scope, element, attrs) {
			element.click(function() {
				var menu = $("#menu");
				var display = menu.css('display');

				if (display == 'none') {
					menu.css('display', 'block').removeClass('fadeOutRight').addClass('fadeInRight');
				} else {
					menu.addClass('fadeOutRight').removeClass('fadeInRight');

					setTimeout(function(){
						menu.css('display', 'none');
					}, 1000);
				}

				return false;
			});
		}
	};
});