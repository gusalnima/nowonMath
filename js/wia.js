


/* select */
jQuery.fn.selectJs = function(bool){
	var isBool = bool;
	var obj = this;
	var $anch_obj = jQuery(obj);
	var oldActive = null;		
	$anch_obj.each(function(){
		jQuery(this).data('target', jQuery(this).next());
		jQuery(this).data('target2', jQuery(this).find('.arr'));

	}).click(function(e){
		if (!isBool) {
			if( oldActive && oldActive != this ){
				jQuery(oldActive).data('target').hide();
				jQuery(oldActive).data('target2').removeClass('active');
			}
		}
		jQuery(this).find('.arr').toggleClass('active');
		jQuery(this).data('target').toggle();
		oldActive = this;
		return false;
	});
	// jQuery('body').click(function(){
	// 	if (!isBool) {
	// 		jQuery(".sel_box_list").hide();
	// 	}
	// });
	
};


// 기본 토글
jQuery.fn.toggleJs = function(){
	var obj = this;
	var $anch_obj = jQuery(obj);
	var oldActive = null;		
	$anch_obj.each(function(){
		jQuery(this).data('target', jQuery(this).next());
		jQuery(this).data('target2', jQuery(this).find('.arr'));

	}).click(function(e){
		if( oldActive && oldActive != this ){
			jQuery(oldActive).data('target').hide();
			jQuery(oldActive).data('target2').removeClass('active');
		}
		jQuery(this).find('.arr').toggleClass('active');
		jQuery(this).data('target').toggle();
		oldActive = this;
		return false;
	});
	jQuery('body').click(function(){
		if( oldActive && oldActive != this ){
			jQuery(oldActive).data('target').hide();
			jQuery(oldActive).data('target2').removeClass('active');
		}
	})
	
};


// 기본 슬라이드 토글
jQuery.fn.slideJs = function(){
	var obj = this;
	var $anch_obj = jQuery(obj);
	var $anch_obj_a = $anch_obj.find('a');
	var oldActive = null;		
	var isClick;
	$anch_obj.each(function(){
		jQuery(this).data('target', jQuery(this).parent().next());
		jQuery(this).data('target2', jQuery(this).find('a'));

	}).click(function(e){
		if( oldActive && oldActive != this ){
			jQuery(oldActive).data('target').removeClass('active');
			jQuery(oldActive).data('target2').text("지도보기");
		} 
		if(jQuery(this).data('target2').text() == '지도보기'){
			   jQuery(this).data('target2').text('지도접기');
		   } else {
			   jQuery(this).data('target2').text('지도보기');
		   }
		jQuery(this).data('target').toggleClass('active');
		oldActive = this;
		return false;
	});
	/*jQuery('body').click(function(){
		if( oldActive && oldActive != this ){
			jQuery(oldActive).data('target').hide();
			jQuery(oldActive).data('target2').removeClass('active');
		}
	})*/
	
};


/* 중앙 모달.. */
jQuery.fn.sy_modalApi = function(){
	var obj = this; //
	var obj_bg = jQuery('.ly_pop_bg');						//background size
	//var int_bg = jQuery('.ly_pop_bg2');						//background size
	var wwidth = jQuery(window).outerWidth();				//window height
	var wheight = jQuery(window).outerHeight();				//window width 
	var ww_h = wwidth/2 - jQuery(obj).width() / 2;			//obj left
	var wh_h = wheight/2 - jQuery(obj).height() / 2;		//obj top

	jQuery(obj_bg).css({'width':wwidth,'height':wheight});
	/* 중앙 */
	jQuery(obj).css({'left':ww_h,'top':wh_h});
	/* 좌우만 센터 */
	//jQuery(obj).css({'left':ww_h,'height':wheight});
	
	jQuery(obj_bg).click(function(){
		jQuery(this).css('display','none');
		jQuery(obj).css('display','none');
		
	});
	jQuery(obj).find('.clo').click(function(){
		jQuery(obj).css('display','none');
		jQuery(obj_bg).css('display','none');
		
	})
	jQuery(window).resize(function(){
		wwidth = jQuery(window).outerWidth();
		wheight = jQuery(window).outerHeight();
		ww_h = wwidth/2 - jQuery(obj).width() / 2;			//	   obj left
		wh_h = wheight/2 - jQuery(obj).height() / 2;		// obj top
		
		jQuery(obj_bg).css({'width':wwidth,'height':wheight});
		//jQuery(int_bg).css({'width':wwidth,'height':wheight});
		/* 중앙 */
		jQuery(obj).css({'left':ww_h,'top':wh_h});
		/* 좌우만 센터 */
		// jQuery(obj).css({'left':ww_h,'height':wheight});
	});
};

/* 고정 모달.. */
jQuery.fn.comp_modalApi = function(){
	var obj = this; //
	var obj_bg = jQuery('.ly_pop_bg');						//background size
	//var int_bg = jQuery('.ly_pop_bg2');						//background size
	var wwidth = jQuery(window).outerWidth();				//window height
	var wheight = jQuery(window).outerHeight();				//window width 

	jQuery(obj_bg).css({'width':wwidth,'height':wheight});
	
	jQuery(obj_bg).click(function(){
		jQuery(this).css('display','none');
		jQuery(obj).css('display','none');
		jQuery('body').css({overflowY:'auto'});
		jQuery('#ly_wraps').css('display','none');
	});
	jQuery(obj).find('.clo').click(function(){
		jQuery(obj).css('display','none');
		jQuery(obj_bg).css('display','none');
		jQuery('body').css({overflowY:'auto'});
		jQuery('#ly_wraps').css('display','none');
	})
	jQuery(window).resize(function(){
		wwidth = jQuery(window).outerWidth();
		wheight = jQuery(window).outerHeight();
		jQuery(obj_bg).css({'width':wwidth,'height':wheight});

	});
};



// tab 
jQuery.fn.tabDefultApi = function(){
	var obj = this;
	var $anch_obj = jQuery('> li',obj);
	var $anch = jQuery('> li > a',obj);
	var $anch_img = jQuery('> li > a > img',obj);
	var $anch_num;
	var $type_box = obj.next().find('> div');
	var chk_num = 0;
	var over_num = 0;
	$anch.each(function(){
		jQuery(this).click(function(){
			var chk_obj = jQuery(this);
			$anch_num = chk_obj.parent().index();
			chk_num = $anch_num;
			onTabClick(jQuery(chk_obj) , $anch_num );	
		});
		jQuery(this).focus(function(){
			var chk_obj = jQuery(this);
			$anch_num = chk_obj.parent().index();			
			onTabClick(jQuery(chk_obj) , $anch_num );		
		});
		
		function onTabClick(_obj , _numm){			
			var _this = _obj;
			var _this_img = _obj.find('img');
			var over = jQuery(_this).parent().next(); /* 보더없애는 소스 추가 */
			$anch.addClass('active')
				.not(_this)
				.removeClass('active');//클릭했을때 on class 나머지는 class 제거
			$anch.next().css('display','block')
				.end()
				.not(_this).next().css('display','none');//클릭했을때 다음에있는 object block 나머지는 none
			$anch_img.chgImg(0);
			_this_img.chgImg(1);
			$type_box.css('display','none');
			$type_box.eq(_numm).css('display','block');	

		};
		
	});
};


jQuery.fn.imgOverApi = function(){
	var obj = this;
	var $anch_obj = jQuery('> li',obj);
	var $anch = jQuery('> li  a',obj);
	var $anch_img = jQuery('> li  a  img',obj);
	var $anch_num;
	$anch.each(function(){
		jQuery(this).mouseenter(function(){
			var chk_obj = jQuery(this);
			$anch_num = chk_obj.parent().index();
			chk_num = $anch_num;
			onTabClick(jQuery(chk_obj) , $anch_num );	
		});
		jQuery(this).focus(function(){
			var chk_obj = jQuery(this);
			$anch_num = chk_obj.parent().index();			
			onTabClick(jQuery(chk_obj) , $anch_num );		
		});

		jQuery(this).mouseleave(function(){
			var chk_obj = jQuery(this);
			$anch_img.chgImg(0);
		});
		
		function onTabClick(_obj , _numm){			
			var _this = _obj;
			var _this_img = _obj.find('img');
			var over = jQuery(_this).parent().next(); /* 보더없애는 소스 추가 */
			$anch_img.chgImg(0);
			_this_img.chgImg(1);

		};
		
	});
};





jQuery.fn.chgImg = function(on,options){
	jQuery(this).each(function(){
		if(this.tagName != "IMG") return;
		var imgSrc = jQuery(this).attr("src");
		var settings = {
			imgType : imgSrc.match(/gif$|jpg$|png$/),
			replaceTxt : "_on"
		}
		settings = jQuery.extend(settings, options || {});
		settings.imgType = "." + settings.imgType;
		settings.replaceTxt = settings.replaceTxt+settings.imgType;
		
		var chkOn = imgSrc.indexOf(settings.replaceTxt) != -1;
		if(on){
			if(chkOn){
				//jQuery(this).unbind("mouseout");
				return;
			}else{
				jQuery(this).attr("src",imgSrc.replace(settings.imgType,settings.replaceTxt));
			}
		}else if(chkOn){
			jQuery(this).attr("src",imgSrc.replace(settings.replaceTxt,settings.imgType));
		}
	});
}

function columResize(){
	if(navigator.userAgent.match(/Android|Mobile|iPhone|iPad|iPod|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i)){

		//mobile family_menu
		jQuery('.jQFamily_btn').click(function(){
			jQuery('.family_link_wrap').css('display','block');
			/*jQuery('.family_link_wrap').stop().animate({'height': '474px'}, 300, "easeOutExpo", function() {
			});*/
		});
		jQuery('.jQFamily_close_btn').click(function(){
			jQuery('.family_link_wrap').css('display','none');
			/*jQuery('.family_link_wrap').stop().animate({'height': '0'}, 300, "easeOutExpo", function() {
				
			});*/
		});

		jQuery('.share').click(function(){
			jQuery('.share_on').addClass('active');
		});
	} else{

		
		//web family_menu
		jQuery('.jQFamily_btn').click(function(){
			jQuery('.family_link_wrap').css('display','block');
			jQuery('.family_link_wrap').stop().animate({'height': '474px'}, 300, "easeOutExpo", function() {
			});
		});
		jQuery('.jQFamily_close_btn').click(function(){
			jQuery('.family_link_wrap').stop().animate({'height': '0'}, 300, "easeOutExpo", function() {
				jQuery('.family_link_wrap').css('display','none');
			});
		});

		//web 전체메뉴
		jQuery('.jQMenu').click(function(){
			var _this = jQuery('.all_menu_wrap');
			menu_on(_this);
		});
		jQuery('.jQMenu_close').click(function(){
			var _this = jQuery('.all_menu_wrap');
			menu_close(_this);
		});

		jQuery('.share a').click(function(){
			jQuery('.share_on').addClass('active');
		});
		jQuery('.share_on .close').click(function(){
			console.log("?????");
			jQuery('.share_on').removeClass('active');
		});
	}
}





$(window).resize(function(){
	columResize();
});


jQuery(document).ready(function(){
	columResize();
	$(function () {
		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	//블랙 투명 bg
	var $obj_bg = jQuery('.black_bg');						
	var $obj_bg2 = jQuery('.ly_pop_bg');						
	var wwidth = jQuery(window).outerWidth();				//window height
	var wheight = jQuery(window).outerHeight();				//window width 
	$obj_bg.css({'width':wwidth,'height':wheight});
	$obj_bg2.css({'width':wwidth,'height':wheight});

	jQuery(window).resize(function(){
		wwidth = jQuery(window).outerWidth();
		wheight = jQuery(window).outerHeight();
		$obj_bg.css({'width':wwidth,'height':wheight});
		$obj_bg2.css({'width':wwidth,'height':wheight});
	});

	
	
	

});

//핍업
function ly_on(_this) {
	var _this = _this;
	_this.css({display:'block'});
	jQuery('.ly_pop_bg').css({display:'block'});
	
}
//전체메뉴
function menu_on(_this) {
	var _this = _this;
	_this.css({display:'block'});
	jQuery('.black_bg').css({display:'block'});
	jQuery('.jQMenu_close').css({display:'block'});
}
function menu_close(_this) {
	var _this = _this;
	_this.css({display:'none'});
	jQuery('.black_bg').css({display:'none'});
	jQuery('.jQMenu_close').css({display:'none'});
}