$(function(){
	

	// 1 Effect
	$('<div class="overlay"></div>').appendTo('.item-1') 
	$('.item-1').find('.zoom, .title').hide();
	$('.overlay').css('opacity', '0');
	$('.item-1').hover(function(){
		$(this).find('.overlay').stop().animate({
			opacity: '0.7'
		}, 600);
		$(this).find('.zoom').stop(0,1).animate({
			opacity : 	'show',
			top : 		'32%'
		}, 500);
		$(this).find('.title').stop(0,1).animate({
			opacity : 'show',
			bottom : '0px'
		}, 500);
	},
	function(){
		$(this).find('.overlay').stop().animate({
			opacity: '0'
		}, 600)
		$(this).find('.zoom').stop(0,1).animate({
			opacity : 'hide'
		}, 500).animate({
			top : '0'
		}, 10);
		$(this).find('.title').stop(0,1).animate({
			opacity : 'hide'
		}, 500).animate({
			bottom : '-50px'
		}, 10);
	});


	// 2 Effect 
	$('<div class="overlay-top"></div>').appendTo('.item-2')
	$('<div class="overlay-bottom"></div>').appendTo('.item-2')
	$('.item-2').find('div').css('opacity', '0.7');
	$('.item-2').find('.read').hide().css('opacity', '0');
	$('.item-2').hover(function(){
		$(this).children('.overlay-top, .overlay-bottom').stop().animate({
		   	opacity: '0.7',
		   	height : '40%'
	   }, 600);
		$(this).find('.read').css('display', 'block').stop(0,1).animate({
			opacity : '1'
		}, 300);
	},
	function(){
		$(this).children('.overlay-top, .overlay-bottom').stop().animate({
			height : '0'
		}, 600);
		$(this).find('.read').stop(0,1).animate({
			opacity : '0'
		}, 300)
	});



	// 3 Effect
	$('<div class="overlay-top-all"></div>').appendTo('.item-3') 
	$('.item-3').find('.overlay-top-all').css('opacity', '0.7');
	$('item-3 .title').hide();
	$('.item-3').hover(function(){
		$(this).find('.overlay-top-all').stop().animate({
			height : '100%'
		}, 600);
		$(this).find('.title').stop(1,1).animate({
			opacity : 	'show',
			left : 		'0'
		}, 600);
	},
	function(){
		$(this).find('.overlay-top-all').stop().animate({
			height : '0'
		}, 600);
		$(this).find('.title').stop(1,1).animate({
			opacity : 	'hide',
			left : 		'-100%'
		});
	});


	// 4 Effect
	for(var i = 1; i <=4;i++){
		$('<div></div>').attr('class', function(){
			return 'overlay-sq-big-' + i;
		}).appendTo('.item-4');
	}; 
	$('.item-4').find('div').css('opacity', '0.7')
	$('.item-4').hover(function(){
		$(this).children('div').stop().animate({
			height : 	'50%',
			width : 	'50%'
		}, 600);
		$(this).find('.read').stop(1,1).animate({
			opacity : 	'show',
			top : 		'48%'
		}, 600)
		.animate({top: '43%'}, 100)
		.animate({top: '46%'}, 100)
		.animate({top: '43%'}, 100)
		.animate({top: '45%'}, 100);
	},
	function(){
		$(this).children('div').stop().animate({
			height : 	'0%',
			width : 	'0%'
		}, 600);
		$(this).find('.read').stop(1,1).animate({
			opacity : 	'hide',
			top : 		'0%'
		}, 600)
	});	


	// 5 Effect
	$('<div class="overlay-square"></div>').appendTo('.item-5'); 
	$('<div class="overlay-square-2"></div>').appendTo('.item-5'); 
	$('.overlay-square, .overlay-square-2').css('opacity', '0.7')
	$('.item-5').find('.zoom').css('opacity', '0');
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
			top : 		'0%'
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
			top : 		'50%'
		}, 600)
	});


	// 6 Effect
	$('<div class="mini-box"></div>').appendTo('.item-6');
	for(var j = 1; j <=9; j++){
		$('<div></div>').attr('class', function(){
			return 'mini-square-' + j
		}).appendTo('.item-6 > .mini-box')
	};
	$('.mini-box').find('div').css('opacity', '0');
	$('.item-6').hover(function(){
		$(this).find('.mini-box > div').each(function(i){
		$(this).stop(1,0).delay((i++) * 35).fadeTo(600, 0.7);})
		$(this).find('.box-arrow').stop(1,0).animate({
			left : 	'0'
		}, 600)
	},
	function(){
		$('.mini-box div').each(function(i) {
		$(this).stop(1,0).delay((i++) * 35).fadeTo(600, 0);})
		$(this).find('.box-arrow').stop(1,0).animate({
			left : 	'-100%'
		}, 600)
	});


	// 7 Effect
	$('<div class="mini-box-line"></div>').appendTo('.item-7');
	$('<span class="vertical-line"></span>').appendTo('.item-7');
	for(var l = 1; l <=4; l++){
		$('<div></div>').attr('class', function(){
			return 'mini-line-' + l
		}).appendTo('.item-7 > .mini-box-line')
	};
	$('.mini-box-line > div').css('opacity', '0.7');
	$('.item-7').hover(function(){
		$(this).find('.mini-box-line > div').each(function(i){
			$(this).stop(1,0).delay((i++) * 100).animate({
				height : 	'100%'
			}, 600)
		});
		$(this).find('.read').stop(1,0).delay(400).animate({
			top : 	'50%'
		})
		.animate({top: '45%'}, 200)
		.animate({top: '50%'}, 200)

		$(this).find('.vertical-line').stop(1,0).delay(430).animate({
			height : 	'200px'
		})
		.animate({height: '190px'}, 200)
		.animate({height: '200px'}, 200)
	},
	function(){
		$(this).find('.mini-box-line > div').each(function(i){
		$(this).stop(1,0).delay((i++) * 0).animate({
			height : 	'0', 
		}, 600)})
		$(this).find('.read').stop(1,0).animate({
			top : 		'-10.5%'
		})
		$(this).find('.vertical-line').stop(1,0).animate({
			height : 	'0'
		})
	});


	// 8 Effect
	$('<div class="mini-box-line-2"></div>').appendTo('.item-8');
	for(var ll = 1; ll <=2; ll++){
		$('<div></div>').attr('class', function(){
			return 'mini-line-left-' + ll
		}).appendTo('.item-8 > .mini-box-line-2')
	};
	for(var rr = 1; rr <=2; rr++){
		$('<div></div>').attr('class', function(){
			return 'mini-line-right-' + rr
		}).appendTo('.item-8 > .mini-box-line-2')
	};
	$('.mini-box-line-2 > div').css('opacity', '0.7');
	$('.item-8').hover(function(){
		$(this).find('.mini-box-line-2 > div').each(function(i){
		$(this).stop(1,1).delay((i++) * 50).animate({
			width : 	'100%',
			opacity: 	'0.7'
		}, 600) });
		$(this).find('.read').stop(1,0).delay(400).animate({
			bottom : 		'5px'
		});
		$(this).find('.title').stop(1,0).animate({
			top : 	'0'
		})
	},
	function(){
		$(this).find('.mini-box-line-2 > div').each(function(){
		$(this).stop(1,0).animate({
			opacity: 	'0'
		}, 600)
		.animate({
			width : 	'0',
			opacity : 	'0.7'
		},0)
		});
		$(this).find('.read').stop().animate({
			bottom : 	'-30px'
		})
		$(this).find('.title').stop().animate({
			top : 	'-45px'
		})   	
	});


	// 9 Effect
	$('<div class="overlay-left"></div>').appendTo('.item-9')
	$('.item-9 .overlay-left').css('opacity', '0.7');
	$('.item-9').hover(function(){
		$(this).find('.overlay-left').stop(1,0).animate({
			width : 	'100%'
		}, 600);
		$(this).find('.block-desc').stop(1,0).animate({
			left: 		'0'
		}, 600);
	},
	function(){
		$(this).find('.overlay-left').stop(1,0).animate({
			width : 	'0'
		}, 600);
		$(this).find('.block-desc').stop(1,0).animate({
			left: 		'-100%'
		}, 600);
	});



//END
});