$(function(){
			$('.item-5').hover(function(){
		$(this).find('.overlay-square').stop().animate({
			height : 	'50%',
			width : 	'100%',
			left : 		'0%',
			top : 		'50%'
		}, 600)
		.end().find('.zoom').stop(1,1).delay(600).animate({opacity : '1'});
		$(this).find('.overlay-square-2').stop().animate({
			height : 	'50%',
			width : 	'100%', 
			left : 		'0%',
			top : 		'0.1%'
		}, 600)
	},
	function(){
		$(this).find('.overlay-square').stop().animate({
			height : 	'0%',
			width : 	'0%',
			left : 		'50%',
			top : 		'50%'
		}, 600)
		.end().find('.zoom').stop(1,1).animate({opacity : '0'});
		$(this).find('.overlay-square-2').stop().animate({
			height : 	'0%',
			width : 	'0%',
			left : 		'50%',
			top : 		'50.1%'
		}, 600)
	});
});