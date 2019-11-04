jQuery(document).ready(function() {
  //contentHei();
  backPopup();
  //thumbWidth();

  jQuery(window).resize(function() {
    //contentHei();
    backPopup();
  });
  // 컨텐츠 영역 스크롤시에 상단 보더
  jQuery(window).scroll(function() {
    if (589 < jQuery(this).scrollTop()) {
      jQuery('.tabs_menu_wrap').css({
        "position": "fixed",
			"top":"0"
      });

    } else {
      jQuery('.tabs_menu_wrap').css({
        "position": "inherit"
      });

    }
  });

  // input clear
  jQuery('.in_close').click(function(){
	jQuery(this).prev().val('');
  });


  // 평가하기
  /*jQuery('.star > a').each(function(i,e) {
	  jQuery(this).click(function(){
		var _this = jQuery(this).parent();
		for (var i = 0; i < 5; i++) {
			if(i <= jQuery(this).index()){
				_this.children().eq(i).addClass('active');
			} else {
				_this.children().eq(i).removeClass('active');
			}
		}
		alert("common.js 33번째줄에 코드 있어요. 평점 : " + (jQuery(this).index() +1 ) );
	  });
  });*/


});

// 상단 메뉴 로고 가리기
jQuery.fn.logo_hide = function() {
	  jQuery('.tops').css({
			"margin-bottom":jQuery('.top_menu').height()
		});
	  jQuery('#contentArea').find('.inner_box').scroll(function() {
		if (0 < jQuery(this).scrollTop()) {
			jQuery('.tops .bg_gray_1').css({
				"display": "none"
			});
			jQuery('.tops').css({
				"margin-bottom":jQuery('.top_menu').height()
			});
			jQuery('.top_menu_wrap').css({
				"position":"fixed","width": jQuery('.tops').width()
			});
		} else {
			jQuery('.tops .bg_gray_1').css({
			"display": "block"
			});
			jQuery('.tops').css({
			"margin-bottom":jQuery('.top_menu').height()
			});
			jQuery('.top_menu_wrap').css({
				"position":"absolute"
			});
		}
	  });
};

// top scroll
jQuery("#back-top").hide();
// fade in #back-top
jQuery(function () {
	jQuery(document).scroll(function () {
		if (jQuery(this).scrollTop() > 10) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	jQuery('#back-top a').click(function () {
		var body = $("html, body");
		body.stop().animate({scrollTop:0}, 500, 'swing', function() {
		});

		return false;

	});
});

// 팝업 배경 사이즈
function backPopup(){
  var $obj_bg = jQuery('.ly_pop_bg');
  var wwidth = jQuery(window).outerWidth(); //window height
  var wheight = jQuery(window).outerHeight(); //window width
  $obj_bg.css({
    'width': wwidth,
    'height': wheight
  });
}
// 카메라 이미지 생성 썸네일 가로 사이즈
function thumbWidth(){
	var width = jQuery('.thumb_img li').width();
	var width = 0;
	$('.thumb_img li').each(function() {
		width += $(this).outerWidth(true);
	});
	console.log(width);
	jQuery('.thumb_img').css({"width":width});
}





// 컨텐츠 영역 높이 고정
/*function contentHei() {
  var topArea;
  var bottomArea
  if (jQuery('#topArea').height() !== undefined) {
    topArea = jQuery('#topArea').height();
  } else {
    topArea = 0;
  }
  if (jQuery('#bottomArea').height() !== undefined) {
    bottomArea = jQuery('#bottomArea').height();
  } else {
    bottomArea = 0;
  }
  var contentArea = jQuery('#contentArea');
  var contentAreaHei = window.innerHeight - topArea - bottomArea;
  contentArea.css({
    "height": contentAreaHei
  });
  console.log("asdf" + topArea + " / " + bottomArea + " / " + window.outerHeight);
};*/

/* 중앙 모달.. */
jQuery.fn.sy_modalApi = function() {
  var obj = this; //
  var obj_bg = jQuery('.ly_pop_bg'); //background size
  /*jQuery(obj_bg).click(function() {
    jQuery(this).css('display', 'none');
    jQuery(obj).css('display', 'none');
  });*/
  jQuery(obj).find('.clo').click(function() {
    jQuery(obj).css('display', 'none');
    jQuery(obj_bg).css('display', 'none');
  });

};

// 가로스크롤 만들기
jQuery.fn.horizontalScroll = function() {
	var obj = this;
	var width = jQuery('> li', obj).width();
	var width = 0;
	jQuery('> li', obj).each(function() {
		width += $(this).outerWidth(true);
	});
  width = width + 20;
	console.log(width);
	obj.css({"width":width});
}

// tab
jQuery.fn.tabDefultApi = function() {
  var obj = this;
  var $anch_obj = jQuery('> li', obj);
  var $anch = jQuery('> li > a', obj);
  var $anch_img = jQuery('> li > a > img', obj);
  var $anch_num;
  var $type_box = obj.next().find('> div');
  var chk_num = 0;
  var over_num = 0;
  $anch.each(function() {
    jQuery(this).click(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.parent().index();
      chk_num = $anch_num;
      onTabClick(jQuery(chk_obj), $anch_num);
    });
    jQuery(this).focus(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.parent().index();
      onTabClick(jQuery(chk_obj), $anch_num);
    });

    function onTabClick(_obj, _numm) {
      var _this = _obj;
      var _this_img = _obj.find('img');
      var over = jQuery(_this).parent().next(); /* 보더없애는 소스 추가 */
      $anch.addClass('active')
        .not(_this)
        .removeClass('active'); //클릭했을때 on class 나머지는 class 제거
      $anch.next().css('display', 'block')
        .end()
        .not(_this).next().css('display', 'none'); //클릭했을때 다음에있는 object block 나머지는 none
      $anch_img.chgImg(0);
      _this_img.chgImg(1);
      $type_box.css('display', 'none');
      $type_box.eq(_numm).css('display', 'block');
    };
  });
};

// 근카제 탭
jQuery.fn.tabGeunkaje = function() {
  var obj = this;
  var $anch_obj = jQuery('> a', obj);
  var $anch_num;
  var $type_box = obj.next().find('> div');
  var chk_num = 0;
  var over_num = 0;
  $anch_obj.each(function() {
    jQuery(this).click(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.index();
      chk_num = $anch_num;
      onTabClick(jQuery(chk_obj), $anch_num);
    });
    jQuery(this).focus(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.index();
      onTabClick(jQuery(chk_obj), $anch_num);
    });

    function onTabClick(_obj, _numm) {
      var _this = _obj;
      $anch_obj.addClass('active')
        .not(_this)
        .removeClass('active'); //클릭했을때 on class 나머지는 class 제거
      $type_box.css('display', 'none');
      $type_box.eq(_numm).css('display', 'block');
    };
  });
};

// tab
jQuery.fn.tabActive = function() {
  var obj = this;
  var $anch_obj = jQuery('> li', obj);
  var $anch_num;
  var chk_num = 0;
  var over_num = 0;
  $anch_obj.each(function() {
    jQuery(this).click(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.index();
      chk_num = $anch_num;
      onTabClick(jQuery(chk_obj), $anch_num);
    });
    jQuery(this).focus(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.index();
      onTabClick(jQuery(chk_obj), $anch_num);
    });

    function onTabClick(_obj, _numm) {
      var _this = _obj;
      $anch_obj.addClass('active')
        .not(_this)
        .removeClass('active'); //클릭했을때 on class 나머지는 class 제거
		console.log(_numm);
		var p = jQuery(".detailBox").eq(_numm);
		var offset = p.offset();
		var tt;
			tt = offset.top - 50;
		console.log(tt);
	  jQuery("html, body").stop().animate({scrollTop:tt}, 500, 'swing', function() {
		  console.log("animation : " + offset.top);
		});
		return false;
    };
  });

  jQuery(window).scroll(function() {
    if (jQuery(".detailBox").eq(0).offset().top > jQuery(this).scrollTop()) {
      $anch_obj.eq(0).addClass('active')
        .siblings()
        .removeClass('active');

    } else if (jQuery(".detailBox").eq(1).offset().top > jQuery(this).scrollTop()) {
      $anch_obj.eq(1).addClass('active')
        .siblings()
        .removeClass('active');

    } else if (jQuery(".detailBox").eq(2).offset().top > jQuery(this).scrollTop()) {
      $anch_obj.eq(2).addClass('active')
        .siblings()
        .removeClass('active');

    } else if (jQuery(".detailBox").eq(3).offset().top > jQuery(this).scrollTop()) {
      $anch_obj.eq(3).addClass('active')
        .siblings()
        .removeClass('active');

    }

  });
};


jQuery.fn.imgOverApi = function() {
  var obj = this;
  var $anch_obj = jQuery('> li', obj);
  var $anch = jQuery('> li  a', obj);
  var $anch_img = jQuery('> li  a  img', obj);
  var $anch_num;
  $anch.each(function() {
    jQuery(this).mouseenter(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.parent().index();
      chk_num = $anch_num;
      onTabClick(jQuery(chk_obj), $anch_num);
    });
    jQuery(this).focus(function() {
      var chk_obj = jQuery(this);
      $anch_num = chk_obj.parent().index();
      onTabClick(jQuery(chk_obj), $anch_num);
    });

    jQuery(this).mouseleave(function() {
      var chk_obj = jQuery(this);
      $anch_img.chgImg(0);
    });

    function onTabClick(_obj, _numm) {
      var _this = _obj;
      var _this_img = _obj.find('img');
      var over = jQuery(_this).parent().next(); /* 보더없애는 소스 추가 */
      $anch_img.chgImg(0);
      _this_img.chgImg(1);

    };

  });
};

jQuery.fn.chgImg = function(on, options) {
  jQuery(this).each(function() {
    if (this.tagName != "IMG") return;
    var imgSrc = jQuery(this).attr("src");
    var settings = {
      imgType: imgSrc.match(/gif$|jpg$|png$/),
      replaceTxt: "_on"
    }
    settings = jQuery.extend(settings, options || {});
    settings.imgType = "." + settings.imgType;
    settings.replaceTxt = settings.replaceTxt + settings.imgType;

    var chkOn = imgSrc.indexOf(settings.replaceTxt) != -1;
    if (on) {
      if (chkOn) {
        //jQuery(this).unbind("mouseout");
        return;
      } else {
        jQuery(this).attr("src", imgSrc.replace(settings.imgType, settings.replaceTxt));
      }
    } else if (chkOn) {
      jQuery(this).attr("src", imgSrc.replace(settings.replaceTxt, settings.imgType));
    }
  });
}

/* select */
jQuery.fn.selectJs = function(bool) {
  var isBool = bool;
  var obj = this;
  var $anch_obj = jQuery(obj);
  var oldActive = null;
  $anch_obj.each(function() {
    jQuery(this).data('target', jQuery(this).next());
    jQuery(this).data('target2', jQuery(this).find('.arr'));

  }).click(function(e) {
    if (!isBool) {
      if (oldActive && oldActive != this) {
        jQuery(oldActive).data('target').hide();
        jQuery(oldActive).data('target2').removeClass('active');
      }
    }
    jQuery(this).find('.arr').toggleClass('active');
    jQuery(this).data('target').toggle();
    oldActive = this;
    return false;
  });
};

// 기본 토글
jQuery.fn.toggleJs = function() {
  var obj = this;
  var $anch_obj = jQuery(obj);
  var oldActive = null;
  $anch_obj.each(function() {
    jQuery(this).data('target', jQuery(this).next());
    jQuery(this).data('target2', jQuery(this).find('.arr'));

  }).click(function(e) {
    if (oldActive && oldActive != this) {
      jQuery(oldActive).data('target').hide();
      jQuery(oldActive).data('target2').removeClass('active');
    }
    jQuery(this).find('.arr').toggleClass('active');
    jQuery(this).data('target').toggle();
    oldActive = this;
    return false;
  });
  jQuery('body').click(function() {
    if (oldActive && oldActive != this) {
      jQuery(oldActive).data('target').hide();
      jQuery(oldActive).data('target2').removeClass('active');
    }
  })
};

// slide toggle
 jQuery.fn.slideToggleJs = function(){
	var obj = this;
	var $anch_obj = jQuery(obj);
	var oldActive = null;
	$anch_obj.each(function(){
		jQuery(this).data('target', jQuery(this).next());
		jQuery(this).data('target2', jQuery(this).find('.arr'));

	}).click(function(e){
		if( oldActive && oldActive != this ){
			//jQuery(oldActive).data('target').hide();
			jQuery(oldActive).data('target').slideUp(200);
			jQuery(oldActive).removeClass('active');
			jQuery(oldActive).data('target2').removeClass('active');
		}
		jQuery(this).toggleClass('active');
		jQuery(this).find('.arr').toggleClass('active');
		//jQuery(this).data('target').toggle();
		jQuery(this).data('target').slideToggle(200);
		oldActive = this;
		return false;
	});
	/*jQuery('body').click(function(){
		if( oldActive && oldActive != this ){
			jQuery(oldActive).data('target').hide();
			jQuery(oldActive).removeClass('active');
			jQuery(oldActive).data('target2').removeClass('active');
		}
	});*/

	jQuery(window).resize(function(){
		wwidth = jQuery(window).outerWidth();
		if(wwidth > 640){
			jQuery('.tab_ly_wrap').css('display','none');
		}
	});

};

// slide toggle
 jQuery.fn.menuJs = function(){

	var obj = this;
	var $anch_obj = jQuery(obj);
	var $anch_obj = jQuery('> li', obj);
	var oldActive = $anch_obj[0];
	console.log(oldActive.width);
	$anch_obj.each(function(){
		jQuery(this).data('target', jQuery(this));
		jQuery(this).data('target2', jQuery(this).parents().find('.bar'));
		jQuery(oldActive).data('target2').css({width:jQuery(this).width()});

	}).click(function(e){
		if( oldActive && oldActive != this ){
			jQuery(oldActive).removeClass('active');
		}
		jQuery(this).addClass('active');
		var _this = jQuery(this);
		console.log(_this.position.left)
		jQuery(oldActive).data('target2').animate({
			left: _this.position().left,
				width: jQuery(this).width()
		  }, 200, function() {
			// Animation complete.
		  });
		oldActive = this;
		return true;
	});
};



// 기본 슬라이드 토글
jQuery.fn.slideJs = function() {
  var obj = this;
  var $anch_obj = jQuery(obj);
  var $anch_obj_a = $anch_obj.find('a');
  var oldActive = null;
  var isClick;
  $anch_obj.each(function() {
    jQuery(this).data('target', jQuery(this).next());
    //jQuery(this).data('target2', jQuery(this).find('a'));

  }).click(function(e) {
    if (oldActive && oldActive != this) {
      jQuery(oldActive).data('target').removeClass('active');
    }
    jQuery(this).data('target').toggleClass('active');
    oldActive = this;
    return false;
  });
};


// 기본 핍업
function ly_on(_this) {
  var _this = _this;
  _this.css({
    display: 'block'
  });
  jQuery('.ly_pop_bg').css({
    display: 'block'
  });
}

// 기본 팝업 + 텍스트 문구
function ly_on(_this, text) {
  var _this = _this;
  _this.css({
    display: 'block'
  });
  jQuery(_this).find('.pop_txt').text(text);
  jQuery('.ly_pop_bg').css({
    display: 'block'
  });
}


// 카메라 팝업
function ly_camera(_this, text) {
	console.log('asdfasdfasdfasdf');
  var _this = _this;
  _this.css({
    display: 'block'
  });
  jQuery(_this).find('.pop_txt').text(text);
  jQuery('.ly_pop_bg').css({
    display: 'block'
  });
  imageCenter(jQuery('.thumb_img .img_boxs'));
}

// image center
function imageCenter(_this) {
	jQuery(document).ready(function() {
		var $this = _this;
		$this.find(jQuery('img')).each(function() {
			var maxWidth = $this.width(); // Max width for the image
			var maxHeight = $this.height();   // Max height for the image
			var ratio = 0;  // Used for aspect ratio
			var width = $(this).width();    // Current image width
			var height = $(this).height();  // Current image height
			console.log("!@!#!@#" +maxWidth + " / " + maxHeight);
			// Check if the current width is larger than the max
			if(width > maxWidth){
				ratio = maxWidth / width;   // get ratio for scaling image
				$(this).css("width", maxWidth); // Set new width
				$(this).css("height", height * ratio);  // Scale height based on ratio
				height = height * ratio;    // Reset height to match scaled image
			}

			var width = $(this).width();    // Current image width
			var height = $(this).height();  // Current image height

			// Check if current height is larger than max
			if(height > maxHeight){
				ratio = maxHeight / height; // get ratio for scaling image
				$(this).css("height", maxHeight);   // Set new height
				$(this).css("width", width * ratio);    // Scale width based on ratio
				width = width * ratio;    // Reset width to match scaled image
			}
		});
	});
}


// 팝업 창닫기 함수 ex) popClose(jQuery('.pop_default'));

function popClose(obj){
	var obj_bg = jQuery('.ly_pop_bg');
	jQuery(obj).css('display', 'none');
	jQuery(obj_bg).css('display', 'none');
}


// text clear
function clearText(id) {

	var cText = "#"+id;
	console.log("cText" + cText);
	jQuery(cText).val('');
}
