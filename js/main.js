var en_cours = 0;
var slideTime=800; //
var slideEasing="easeOutExpo"; //

$(document).ready(function(){

	

	if(navigator.userAgent.match(/Android|Mobile|iPhone|iPad|iPod|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i)){
	} else{
		visualHeight();		
		headerScroll();
	}


	var DotNavLength = $('.pageNavi li a').length;

	function DotNavInt() {
		$('.pageNavi li').removeClass('nowPos');
		
	}

	function DotNavState(arj){
		$('.pageNavi li:eq(' + arj + ')').addClass('nowPos');
		
		
	}

	DotNavState('0');
	
	$('.pageNavi li a').click(function(event){
		var sectionName = '#' + $(this).attr('class');
		moving(sectionName);
	});

	var position1 = $('#section1').offset().top;
	var position2 = $('#section2').offset().top;
	var position3 = $('#section3').offset().top;
	var position4 = $('#section4').offset().top;
	var position5 = $('#section5').offset().top;


	
	$(window).scroll(function() {
		var positionScroll = $(window).scrollTop(); // now scrollbar location
		//var currentTop = parseInt($(".section2_wrap .txt_box").css("top"));
		


		//$('.test_box').text(positionScroll);
		//$('.test_box2').text(positionScroll+(-743)+"px");
		//$('.test_box3').text( -(positionScroll+(-743))+"px" );
		//.stop().animate({"top": $(window).scrollTop()+currentTop+"px"}, 500);

		if(positionScroll < position2 - 30){

			if($('.pageNavi li:eq(0)').attr('class') !='nowPos') { 
				DotNavInt(); DotNavState('0'); 
			}		

		} else if(positionScroll + 30 < position3){

			if($('.pageNavi li:eq(1)').attr('class') !='nowPos') { DotNavInt(); DotNavState('1'); }

		} else if(positionScroll + 30 < position4){

			if($('.pageNavi li:eq(2)').attr('class') !='nowPos') { DotNavInt(); DotNavState('2'); }

		} else if(positionScroll + 30 < position5 - 100){

			if($('.pageNavi li:eq(3)').attr('class') !='nowPos') { DotNavInt(); DotNavState('3'); }

		} else{

			if($('.pageNavi li:eq(4)').attr('class') !='nowPos') { DotNavInt(); DotNavState('4'); }

		} 
		
	});
	
});


jQuery.fn.mainBusinessApi = function(){
	var obj = this;
	var $mblist = jQuery('.m_business_list > li > a');
	var $mbd = jQuery('>.wsize .business_wrap',obj);
	var $mbd_close = jQuery('>.wsize .business_wrap > .close',obj);
	var mbd_top_1 = jQuery('.business_wrap_1').css('left');
	var mbd_top_2 = jQuery('.business_wrap_2').css('right');
	var mbd_top_3 = jQuery('.business_wrap_3').css('left');
	var mbd_top_4 = jQuery('.business_wrap_4').css('right');
	var click_num;
	var businessHei = jQuery('.main_business').height();
	var $busiName;
	/*$('.business_wrap_left_box1').css("left",mbd_top_1);
	$('.business_wrap_left_box2').css("right",mbd_top_2);
	$('.business_wrap_right_box1').css("left",mbd_top_3);
	$('.business_wrap_right_box2').css("right",mbd_top_4);*/
	var isOpen;
	$mbd_close.each(function(){
		jQuery(this).click(function(){
			var chk_obj = jQuery(this);
			click_num = chk_obj.parent().parent().index();
			$mbd.removeClass('active');
			isOpen = false;
			//if(wwidth > 640) { 
				onCloseClick(5);
			/*} else {
				$mbd.css({"z-index":"1"});
				$mbd.removeClass('active');
				$mbd.eq(0).css({'left': mbd_top_1});
				$mbd.eq(1).css({'left': mbd_top_2});
				$mbd.eq(2).css({'left': mbd_top_3});
				$mbd.eq(3).css({'left': mbd_top_4});
				$('.business_wrap_box').css("width","0px");
			}*/
		});
	});
	var busiGetWidth;
	var busiGetPosition;
	var wwidth = jQuery(window).outerWidth();
	if(wwidth <= 640) { 
		busiGetWidth = "100%";
		busiGetPosition = "0px";
		$mbd.parent().addClass('business_wrap_box');
		$('.business_wrap_box').find('.business_wrap').height(businessHei);
	} else if( wwidth > 640 && wwidth <= 1200 ) {
		busiGetWidth = "640px";
		busiGetPosition = "0px";
		$('.business_wrap').height('initial');
		
	} else if( wwidth >= 1200 ) {
		busiGetWidth = "50%";
		busiGetPosition = "40px";
		$('.business_wrap').height('690px');
		
	}
	
	$(window).resize(function(){
		wwidth = jQuery(window).outerWidth();
		businessHei = jQuery('.main_business').height();
		if(wwidth <= 640) { 
			$mbd.parent().addClass('business_wrap_box');
			busiGetWidth = "100%";
			busiGetPosition = "0px";
			$('.business_wrap_box').width('100%');
			$('.business_wrap_box').find('.business_wrap').height(businessHei);
		} else if( wwidth > 640 && wwidth <= 1200) {
			busiGetWidth = "640px";
			busiGetPosition = "0px";
			$('.business_wrap').height('initial');
		} else if( wwidth >= 1200 ) {
			busiGetWidth = "50%";
			busiGetPosition = "40px";
			$('.business_wrap').height('690px');
		}
		if(isOpen) {
		
			for(var i = 0; i < 4; i++){
				if(click_num != i){
					if(i == 0){
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'left': mbd_top_1});
						$mbd.eq(i).height('0px');
						if(wwidth > 640) { 
							$('.business_wrap_left_box1').css("width","0px");
						}
					} else if(i == 2){
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'left': mbd_top_3});
						$mbd.eq(i).height('0px');
						if(wwidth > 640) { 
							$('.business_wrap_left_box2').css("width","0px");
						}
					} else if(i == 1){
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'right': mbd_top_2});
						$mbd.eq(i).height('0px');
						if(wwidth > 640) { 
								$('.business_wrap_right_box1').css("width","0px");
						}
					} else if(i == 3) {
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'right': mbd_top_4});
						$mbd.eq(i).height('0px');
						if(wwidth > 640) { 
							$('.business_wrap_right_box2').css("width","0px");
						}
					}
					
				}
			}
		} else {
			for(var i = 0; i < 4; i++){
					if(i == 0){
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'left': mbd_top_1});
							if(wwidth > 640) { 
								$(this).height('initial');
								$('.business_wrap_left_box1').css("width","0px");
							}
					} else if(i == 2){
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'left': mbd_top_3});
							if(wwidth > 640) { 
								$(this).height('initial');
								$('.business_wrap_left_box2').css("width","0px");
							}
					} else if(i == 1){
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'right': mbd_top_2});
							if(wwidth > 640) { 
								$(this).height('initial');
								$('.business_wrap_right_box1').css("width","0px");
							}
					} else if(i == 3) {
						$mbd.eq(i).css({"z-index":"1"});
						$mbd.eq(i).removeClass('active');
						$mbd.eq(i).css({'right': mbd_top_4});
							if(wwidth > 640) { 
								$(this).height('initial');
								$('.business_wrap_right_box2').css("width","0px");
							}
					}
					
						
			}
		}
		
	});

	function onCloseClick(click_num){
			isOpen = false;
			wwidth = jQuery(window).outerWidth();
				for(var i = 0; i < 4; i++){
					if(click_num != i){
						if(i == 0){
							
							$mbd.eq(i).css({"z-index":"1"});
							$mbd.eq(i).removeClass('active');
							$mbd.eq(i).stop().delay(50).animate({'left': mbd_top_1}, 300, "easeOutExpo",function(){
								if(wwidth > 640 && wwidth <= 1200) { 
									$(this).height('initial');
									$('.business_wrap_left_box1').css("width","0px");
								} else if(wwidth > 1200) {
									$('.business_wrap_left_box1').css("width","0px");
									$(this).height('690px');
								}
							});
						} else if(i == 2){
							$mbd.eq(i).css({"z-index":"1"});
							$mbd.eq(i).removeClass('active');
							$mbd.eq(i).stop().delay(50).animate({'left': mbd_top_3}, 300, "easeOutExpo",function(){
								if(wwidth > 640 && wwidth <= 1200) { 
									$(this).height('initial');
									$('.business_wrap_left_box2').css("width","0px");
								} else if(wwidth > 1200) {
									$('.business_wrap_left_box2').css("width","0px");
									$(this).height('690px');
								}
							});
						} else if(i == 1){
							$mbd.eq(i).css({"z-index":"1"});
							$mbd.eq(i).removeClass('active');
							$mbd.eq(i).stop().delay(50).animate({'right': mbd_top_2}, 300, "easeOutExpo",function(){
								if(wwidth > 640 && wwidth <= 1200) { 
									$(this).height('initial');
									$('.business_wrap_right_box1').css("width","0px");
								} else if(wwidth > 1200) {
									$('.business_wrap_right_box1').css("width","0px");
									$(this).height('690px');
								}
							});
						} else if(i == 3) {
							$mbd.eq(i).css({"z-index":"1"});
							$mbd.eq(i).removeClass('active');
							$mbd.eq(i).stop().delay(50).animate({'right': mbd_top_4}, 300, "easeOutExpo",function(){
								if(wwidth > 640 && wwidth <= 1200) { 
									$(this).height('initial');
									$('.business_wrap_right_box2').css("width","0px");
								} else if(wwidth > 1200) {
									$('.business_wrap_right_box2').css("width","0px");
									$(this).height('690px');
								}
							});
						}
						
					}
				}
			
		
		
	};
	var oldNum;
	$mblist.each(function(){
		jQuery(this).click(function(){
			var busiName = '#' + $(this).attr('class');
			var chk_obj = jQuery(this);
			click_num = chk_obj.parent().index();
			$mbd.removeClass('active');
			onClick(busiName,click_num);
		});
	});

	function onClick(busiName,click_num){	
		onCloseClick(click_num);
		$busiName = $(busiName);
		isOpen = true;
			if(click_num == 0){
				$('.business_wrap_left_box1').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				if(wwidth < 640) {
					$busiName.height(businessHei);
				}
				$busiName.stop().delay(50).animate({'left': busiGetPosition}, 600, "easeOutExpo",function(){
				});
			} else if(click_num == 2){
				$('.business_wrap_left_box2').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				if(wwidth < 640) {
					$busiName.height(businessHei);
				}
				$busiName.stop().delay(50).animate({'left': busiGetPosition}, 600, "easeOutExpo",function(){
				});
			} else if(click_num == 1){
				$('.business_wrap_right_box1').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				if(wwidth < 640) {
					$busiName.height(businessHei);
				}
				$busiName.stop().delay(50).animate({'right': busiGetPosition}, 600, "easeOutExpo",function(){
				});
			} else if(click_num == 3) {
				$('.business_wrap_right_box2').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				if(wwidth < 640) {
					$busiName.height(businessHei);
				}
				$busiName.stop().delay(50).animate({'right': busiGetPosition}, 600, "easeOutExpo",function(){
				});
			}
					

		/*} else {
			if(click_num == 0){
				$('.business_wrap_left_box1').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				$busiName.css({'left': busiGetPosition});
				
			} else if(click_num == 2){
				$('.business_wrap_left_box2').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				$busiName.css({'left': busiGetPosition});
			} else if(click_num == 1){
				$('.business_wrap_right_box1').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				$busiName.css({'left': busiGetPosition});
			} else if(click_num == 3) {
				$('.business_wrap_right_box2').css("width",busiGetWidth);
				$busiName.css({"z-index":"2"});
				$busiName.addClass('active');
				$busiName.addClass('business_mobile');
				$busiName.css({'left': busiGetPosition});
			}
		}*/
		
	};
};


function moving(sectionName){
	
	var position = $(sectionName).offset();
	var positioning = position.top;
	
	$('html, body').animate({scrollTop: positioning},{
		duration: slideTime,
		easing:slideEasing,
		complete:function(){
		}
	});
	return false;
}


function updateTransition() {
  var el = document.querySelector("p.scroll");
   
  if (el) {
    el.className = "scrollDown";
  } else {
    el = document.querySelector("p.scrollDown");
    el.className = "scroll";
  }
   
  return el;
}

var intervalID = window.setInterval(updateTransition, 500);


function visualHeight() {
	var visual = $('.visual-height-full'),
		liH = $('.m_ban_slider li'),
		winH = $(window).width(),
		winH = $(window).height();

	
		if (visual.length > 0){
			if($(window).height() < 850){
				visual.css('height', 850);
				liH.css('height', 850);
			}else{
				visual.css('height', winH + 'px');
				liH.css('height', winH + 'px');
			}
		}
	
}

function headerScroll(){
	console.log("?????????????????????????????????????????????????????????????????????????????????");
	var wrapScroll = $(window).scrollTop(),
		header = $('#header_wrap'),
		menu = $('.gnb_wrap');

	/*if (wrapScroll >= 100){
		//if ($('#wrap').width() > 1024){
			//header.addClass('header-scroll').css('top', '0');
		//} else {
			header.addClass('header-scroll').css('top', wrapScroll + 'px');
		//}
	} else {
		header.removeClass('header-scroll').css('top', '');
	}*/
	$(window).scroll(function() {
		wrapScroll = $(window).scrollTop();
		if (wrapScroll >= 40){
			/*if ($('#wrap').width() > 1024){
				header.addClass('header-scroll').css('top', '0');
			} else {
				header.addClass('header-scroll').css('top', wrapScroll + 'px');
			}*/
			header.addClass('header-scroll');
			menu.addClass('header-scroll');
		} else {
			//header.removeClass('header-scroll').css('top', '');
			header.removeClass('header-scroll')
			menu.removeClass('header-scroll')
		}
		//layerCloseEvent2()
		
	});
	/*$('#wrap').on('scroll', function(){
		wrapScroll = $('#wrap').scrollTop();
	console.log(" gmdmasdf");

		if (wrapScroll >= 40){
			if ($('#wrap').width() > 1024){
				header.addClass('header-scroll').css('top', '0');
			} else {
				header.addClass('header-scroll').css('top', wrapScroll + 'px');
			}
			header.addClass('header-scroll');
		} else {
			//header.removeClass('header-scroll').css('top', '');
			header.removeClass('header-scroll')
		}
		//layerCloseEvent2()
	});*/
}

$(window).resize(function(){
	if(navigator.userAgent.match(/Android|Mobile|iPhone|iPad|iPod|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i)){
	} else{
		visualHeight();
		headerScroll();
	}
});