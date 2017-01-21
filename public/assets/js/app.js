$(document).ready(function(){
	// smooth scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	// hover works
	$('#works .box-gallery li').hover(function(){
		$(this).children('.it-hover').css('display', 'block').addClass('bounceIn');
	}, function(){
		$(this).children('.it-hover').css('display', 'none').removeClass('bounceIn');
	});

	// wow
	wow = new WOW(
		{
			mobile: false
		}
	)
	wow.init();

	// open/close menu
	$('#main-home .it-menu').click(function(){
		$('#menu').css('display', 'block').removeClass('fadeOutRight').addClass('fadeInRight');

		return false;
	});

	$('#menu .it-link-close').click(function() {
		$('#menu').addClass('fadeOutRight').removeClass('fadeInRight');

		setTimeOut(function(){
			$('#menu').css('display', 'none')
		}, 1000);

		return false;
	});

	$('#menu ul li a').click(function() {
		$('#menu').addClass('fadeOutRight').removeClass('fadeInRight');

		setTimeOut(function(){
			$('#menu').css('display', 'none')
		}, 1000);
	});
});