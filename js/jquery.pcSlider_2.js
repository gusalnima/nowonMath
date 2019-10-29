/**___________________________________________________________________________________
@author WolfHaru/2012
@link http://wolfharu.tistory.com
@version 0.1

modified by kimmiok
Desc.
	- class 변경 : 'WolfHaruSlider' -> 'slider'
	- 태그 변경 : 상위 ul li의 상속을 벗어나기 위해 div div로 변경
	- 'slider_default' 불필요하다 판단하여 생성 막음
	- 'slider_swipe' 위치 변경 : overflow:hidden 영역에서 벗어나기 위해 'slider_view' 자식에서 'slider' 자식으로 변경
	- 'pageType' 추가
	- 'listType' 추가
	- 높이값 기능 개선
___________________________________________________________________________________**/

$.fn.WolfHaruSlider = function() {
	$(this).each(function(index) {

		var currentPage = 1;
		var SliderId = 'slider_' + index;
		var SliderDevice = false;
		var $WolfHaruSliderSwipe, $SliderBtnL, $SliderBtnR;
		
		if ( (navigator.userAgent.toLowerCase().indexOf("iphone") != -1) || (navigator.userAgent.toLowerCase().indexOf("ipod") != -1) || (navigator.userAgent.toLowerCase().indexOf("ipad") != -1) || (navigator.userAgent.toLowerCase().indexOf("android") != -1) ) {
			SliderDevice = true;
		}

		$(this).attr('id',SliderId);
		
		var $SliderBox = $('#'+SliderId);
		var $SliderList = $(this).find('.slider_list');

		var pageType = $(this).attr('pageType'); // count : 카운트 페이지네이션, number 1,2,3 페이지네이션
		var listType = $(this).attr('listType'); // multiple : 네장반, null : 한장		
		var naviType = $(this).attr('naviType'); // cover : 앞/뒤 버튼, null : 없음

		if ( pageType == 'count' ) {
			$SliderBox.addClass('page_count');
		} else if ( pageType == 'number' ) {
			$SliderBox.addClass('page_number');
		} else {
		}
		
		if ( naviType == 'cover' ) {
			$SliderBox.addClass('navi_cover');
		} else {
		}
		if ( listType == 'multiple' ) {
			var _position = 768;
			var _unit = 'px';
		}else if ( listType == 'multiple2' || listType == 'multiple3' ) {
			var _position = 562;
			var _unit = 'px';
		}else if ( listType == 'multiple4') {
			var _position = 472;
			var _unit = 'px';
		}else if ( listType == 'multiple5' ) {
			var _position = 136;
			var _unit = 'px';
		}else if ( listType == 'multiple6') {
			var _position = 321;
			var _unit = 'px';
		}else if (listType == 'multiple7') {
			var _position = 576;
			var _unit = 'px';
		}else if (listType == 'multiple8') {
			var _position = 768;
			var _unit = 'px';
		}else {
			var _position = 100;
			var _unit = '%';
		}
		
		$SliderList.wrap('<div class="slider_view"></div>');
		
		var $SliderItem = $SliderList.find('.slider_item');
		var SliderItemTotal = $SliderItem.length;
		
		$SliderItem.show(); /* jquery가 실행되기 전까지 ie에서 아이템 겹침 현상 대응, doosan.css 참조 */ //2012.01.09

		var fnNavImg = function(a) {
			$('.ui_bigPostImg > img').attr('src', '/ce/common/img/event/real_emo_poster0'+a+'.jpg');
			if ( naviType == 'cover' ) {
				$SliderBtnR.insertAfter($WolfHaruSliderSwipe).unbind('click');
				$SliderBtnL.insertAfter($WolfHaruSliderSwipe).unbind('click');
				$SliderBtnL.click(function() {movePage(a-1,200)});
				$SliderBtnR.click(function() {movePage(a+1,200)});
			}
			//$SliderItem.show(); /* jquery가 실행되기 전까지 ie에서 아이템 겹침 현상 대응, doosan.css 참조 */ //2012.01.09

			$WolfHaruSliderSwipe.find('span').removeClass('on').eq(a).addClass('on');

			if ( pageType == 'count' ) {
				$WolfHaruSliderSwipe.html('<span class="slider_current">'+currentPage+'</span><span class="slider_total">/'+SliderItemTotal+'</span>');
			}
			
			if ( listType == 'multiple' || listType == 'multiple2' || listType == 'multiple3' || listType == 'multiple4' || listType == 'multiple5' || listType == 'multiple7' || listType == 'multiple8' ) {
				$SliderBox.addClass('list_multiple');
			}
			
			// multiple 하위였는데 여기로 이동함. //2012.01.09
			//추가 : 클릭 큰 이미지 보기
			$("#slider_"+index+" .slider_view .slider_list .slider_item").find(".slider_thumb a").on("click", function(evt){
				evt.preventDefault();
				var sliderItemIdx = $(this).closest(".slider_thumb").index();
				var sliderGroupIdx = $(this).closest(".slider_item").index();
				var sliderHeight = $(this).closest(".slider_thumb").css("min-height");

				var items = $("#slider_"+index+" .slider_view .slider_list .slider_item");				
				var thumImgSrc = items.eq(sliderGroupIdx).children(".slider_thumb").eq(sliderItemIdx).find("img")
				var thumImgAlt = items.eq(sliderGroupIdx).children(".slider_thumb").eq(sliderItemIdx).find("img").attr("alt")
					//20131105 팝업 섬네일 클릭시 포인트 이미지 변환
					if(sliderHeight == "72px"){
						$("#pop_zoom .zoom_pick .bullet a").find("img").attr("src", $("#pop_zoom .zoom_pick .bullet a").find("img").attr("src").replace("blue_point_over.png","blue_point.png"));
						$("#pop_zoom .zoom_pick .bullet a").eq(sliderGroupIdx).find("img").attr("src", $("#pop_zoom .zoom_pick .bullet a").eq(sliderGroupIdx).find("img").attr("src").replace("blue_point.png","blue_point_over.png"));
					}				
				items.children(".slider_thumb").removeClass("on");
				items.eq(sliderGroupIdx).children(".slider_thumb").eq(sliderItemIdx).addClass("on");
				
				$(this).closest("#slider_"+index).parent(".hilight_ui").prev(".img_bin").find("img").attr("src", thumImgSrc.attr("src").replace("thum", "big"));
				$(".img_bin").eq(index).children(".desc_label").text(thumImgAlt)
				
				$(".zoom_imgs ul li").hide();
				$(".zoom_imgs ul li").eq(sliderGroupIdx).show();
								
			});
			
			if ( SliderItemTotal > 1 ) {
				
				if ( currentPage == 1 ) {
					$SliderBox.find('.slider_prev').removeClass('slider_prev').addClass('slider_prev_dis').unbind('click');
					$SliderBox.find('.slider_next_dis').removeClass('slider_next_dis').addClass('slider_next').bind('click');
				}
				if ( currentPage > 1 && currentPage < SliderItemTotal) {
					$SliderBox.find('.slider_prev_dis').removeClass('slider_prev_dis').addClass('slider_prev').bind('click');
					$SliderBox.find('.slider_next_dis').removeClass('slider_next_dis').addClass('slider_next').bind('click');
				}
				if ( currentPage == SliderItemTotal ) {
					$SliderBox.find('.slider_next').removeClass('slider_next').addClass('slider_next_dis').unbind('click');
					$SliderBox.find('.slider_prev_dis').removeClass('slider_prev_dis').addClass('slider_prev').bind('click');
				}
				if ( currentPage > 1 && currentPage < SliderItemTotal ) {
					$SliderBox.find('.slider_prev_dis').removeClass('slider_prev_dis').addClass('slider_prev').bind('click');
					$SliderBox.find('.slider_next_dis').removeClass('slider_next_dis').addClass('slider_next').bind('click'); 
//					console.log('current page : '+currentPage + ',\ttotal page :'+SliderItemTotal);
				}
				
				//$SliderBox.find('.slider_item:last-child').hide();  
				/*$('.slider_prev_dis').click(function(){
					alert('이전 페이지가 없습니다.');
				});
				$('.slider_next_dis').click(function(){
					alert('다음 페이지가 없습니다.');
				});*/
			}
			else
			{
				$SliderBox.find('.slider_prev').removeClass('slider_prev').addClass('slider_prev_dis').unbind('click');
				$SliderBox.find('.slider_next').removeClass('slider_next').addClass('slider_next_dis').unbind('click');
			}
			
			
		};
		
		var moveFlicking = function(c) {
			if(c>0&&currentPage<(SliderItemTotal)) {
				currentPage++;
			}else{
				if(c<0&&currentPage>0){
					currentPage--;
				}
			}
			movePage(currentPage,100);
		}		
		
		var movePage=function(a,b){
			currentPage=a;			
			moveContainer(a*-_position+_unit,b);
			
			//$('.ui_bigPostImg > img').attr('src',$('.ui_bigPostImg > img').attr('src').replace( 'poster01.jpg',  'poster0'+currentPage+'.jpg'))
		};
		
		var moveContainer = function(b,a) {
			if(!a){a=0}
			fnNavImg(currentPage);
			$SliderList.animate({'left':b},{duration:a,complete:function() {
				if ( currentPage < 1) {
					currentPage = SliderItemTotal;
					$SliderList.css({'left':(-_position*currentPage)+_unit})
				} else if ( currentPage >= SliderItemTotal+1 ) {
					currentPage =1;
					$SliderList.css({'left':(-_position*currentPage)+_unit})
				}
			}});
		}

		//if ( SliderItemTotal > 0 ) { $SliderItem.eq(0).find('img').clone().insertAfter($SliderList).attr('alt','').addClass('slider_default'); }
		// if ( SliderItemTotal > 1 ) { //2012.01.09
//			$SliderItem.eq(0).clone().appendTo($SliderList);
//			$SliderItem.eq(SliderItemTotal-1).clone().prependTo($SliderList);
			$SliderItem = $SliderList.find('.slider_item');
			SliderItemTotal = $SliderItem.length;
			$SliderItem.each(function(index) {
				$(this).css({'left':((index+1)*_position)+_unit});
			});
			$SliderList.css({'left':(-_position*(currentPage))+_unit});
			
			$SliderBox.append('<div class="slider_swipe"></div>');
			$WolfHaruSliderSwipe = $SliderBox.find('.slider_swipe');
			
			for ( var i=0; i<SliderItemTotal+2; i++ ) {
				$('<span><em>'+i+'</em></span>').data('clickNum',i).appendTo($WolfHaruSliderSwipe).click(function(){
					movePage($(this).data('clickNum'),100);
				});
			}
			$WolfHaruSliderSwipe.find('span').filter(':first-child,:last-child').text('').hide();
			if ( naviType == 'cover' ) {
				$SliderBtnL = $('<span class="slider_prev"><em>Prev</em></span>');
				$SliderBtnR = $('<span class="slider_next"><em>Next</em></span>');
			}
			fnNavImg(currentPage);
		//} //2012.01.09

		//2012.01.09 // 이미지가 하나일때 스와이프영역 삭제
		if ( $WolfHaruSliderSwipe.find('span').length <= 3 && pageType != 'count')
		{
			$SliderBox.find('.slider_swipe').remove();
		}
		
		if ( SliderDevice ) {
			var FlickingWrapWidth;
			var isNewTouch = true;
			var isFlicking = false;
			var TouchCT = {};
						
			var WolfHaruSliderTouchStart = function(e) {
				var startTouch = e.touches[0];
				TouchCT.startX = startTouch.screenX;
				TouchCT.startY = startTouch.screenY;
				TouchCT.startTime = Date.now();
			}
			var WolfHaruSliderTouchMove = function(e) {
				FlickingWrapWidth = $SliderBox.width();
				var moveTouch = e.touches[0];
				
				if ( isNewTouch ) {
					if(Math.abs(TouchCT.startX-moveTouch.screenX)>Math.abs(TouchCT.startY-moveTouch.screenY)){
						isFlicking=true;
					}
					isNewTouch = false;
				}
				
				if ( isFlicking ) { 
					event.preventDefault();
					var cWrapMove = ((TouchCT.startX-moveTouch.screenX)/FlickingWrapWidth+currentPage)*-_position;
					moveContainer(cWrapMove+_unit);
				}
			}
			var WolfHaruSliderTouchEnd = function(e) {
				if( isFlicking ){

					var endTouch = e.changedTouches[0];
					var ex = Math.abs(TouchCT.startX-endTouch.screenX);
					var ey = Math.abs(TouchCT.startY-endTouch.screenY);
			
					if(ex>FlickingWrapWidth/2 || (Date.now()-TouchCT.startTime<500&&ex*2>ey&&ex>50)) {
						//alert(1)
						moveFlicking(TouchCT.startX-endTouch.screenX);
					} else {
						//alert(2);
						movePage(currentPage,200);
					}
					
					isFlicking = false;
				}
				isNewTouch = true;
			}
			eval(SliderId + '.addEventListener("touchstart",WolfHaruSliderTouchStart,false)');
			eval(SliderId + '.addEventListener("touchmove",WolfHaruSliderTouchMove,false)');
			eval(SliderId + '.addEventListener("touchend",WolfHaruSliderTouchEnd,false)');
		}

		
		
		var $listSwitch = $('.list_switch');
		var $listDetail = $('.list_detail');

		var sliderHeight = -1;
		$(this).find($SliderItem).each(function() {
			sliderHeight = sliderHeight > $(this).height() ? sliderHeight : $(this).height();
		});
		$(this).height(sliderHeight);
		
		$(this).find($SliderItem).height(sliderHeight);
		$(this).find('.slider_thumb').height(sliderHeight);
		

		
		
		
		$listSwitch.click(function(){
			if ( $(this).next($listDetail).is(':visible') )
			{
				if ( $('#'+SliderId) ) {
					var sliderHeight = -1;
					$('#'+SliderId).find($SliderItem).each(function() {
						sliderHeight = sliderHeight > $(this).height() ? sliderHeight : $(this).height();
					});
					$('#'+SliderId).height(sliderHeight);
				}
			}
			return false;
		});

	});
	
	return this;
};
// award mobile slider
$(document).ready(function() {
	$('.slider').WolfHaruSlider();
	
	$(".indexTxt").children(".mbtn_prev").on("click", function(e){
		e.preventDefault();
		slider3.prev()			
	});
	$(".indexTxt").children(".mbtn_next").on("click", function(e){
		e.preventDefault();
		slider3.next()
	});
	
});