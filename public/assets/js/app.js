$(document).ready(function(){
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
});