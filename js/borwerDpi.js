var userAgent = navigator.userAgent, isRWD = true, isRWDCookie = $.cookie('isRWD'), device = ["iPad","GT-","SHW-M180", "SHW-M380", "SHV-E140", "SHV-E150", "SHW-M430", "SHW-M480", "SHW-M500"];
	
for(var i=0;i<device.length;i++){
	if(userAgent.indexOf(device[i]) > 0){
		isRWD = false;
	}
}

var checkWidth = function() {
	var browserWidth = $(window).width();
	var $body = jQuery('body');

	setsize('uiWeb');

	if (browserWidth <= 737 && isRWD && isRWDCookie !="false") {
	  setsize('uiMobile');
	
	  
	  // 모바일에서 주소표시줄 감추기
	  var navAppName = navigator.appName;
		if (navAppName == "Netscape" || navAppName == "Opera") {
			window.addEventListener('load', function(){
			  if(document.URL.indexOf("#") < 0){
				  setTimeout(scrollTo, 0, 0, 1);
			  }
			}, false);
		}
		// 모바일 메뉴 show/hide
		if(jQuery('.mo_menu_on').hasClass('active') == false){
			jQuery('.menu_side').css({'display':'none'});
		}
	}
	else if (browserWidth <= 980) {
	  setsize('uiWeb uiPad');
	  // menu show / hide
	  if(jQuery('.pad_menu_on').hasClass('active') == false){
	  	jQuery('.menu_side').css({'width':'77px' , 'display':'block'});
			jQuery('.padhide').css({'display':'none'});
			jQuery('.pad_menu_on').css('display','block');
			jQuery('.pad_menu_off').css('display','none');
	  } 
	 	jQuery('.black_bg').css({'display':'none'});
	 	jQuery('.mo_menu_on').removeClass('active');
	 	jQuery('.contents_wrap').css('position','relative');
	}
	else {
		$body.removeClass().addClass('uiWeb');
		// menu show / hide
		jQuery('.menu_side').css({'width':'325px' , 'display':'block'});
		jQuery('.padhide').css({'display':'block'});
		jQuery('.pad_menu_on').css('display','none');
		jQuery('.pad_menu_off').css('display','none');
		jQuery('.pad_menu_on').removeClass('active');
		jQuery('.black_bg').css({'display':'none'});
	 	jQuery('.mo_menu_on').removeClass('active');
	 	jQuery('.contents_wrap').css('position','relative');
	}

};

jQuery(document).ready(function() {
	checkWidth();
	$(window).resize(checkWidth);
});

var setsize = function(size) {
		var $body = jQuery('body');
		jQuery('body').removeClass('uiWeb uiMobile uiPad').addClass(size);
		
};

/**/


/**
 * 작업 방법
 * 1. isPad, isMobile 을 호출하여 if문 분기로 각각 로직을 페이지 단에서 처리한다.
 * 2. autoMobile, autoPad를 호출하는것 만으로 class를 판단하여 일괄 처리한다.
 */
var _userAgent = navigator.userAgent;
var _device = ["iPad","GT-","SM-T700" , "SHW-M180", "SHW-M380", "SHV-E140", "SHV-E150", "SHW-M430", "SHW-M480", "SHW-M500"];
var _mobile = ["iPhone", "Android","iPod"];

/**
 * check is Pad/Tab..
 * @returns {Boolean}
 */
function isPad(){

	/*if ($(window).width() >= 640){
		return true;
	} else {
		return false;
	}*/
	//if (_userAgent.match(/iPad|GT-|SM-|SHW-M180|SHW-M380|SHV-E140|SHV-E150|SHW-M430|SHW-M480|SHW-M500/) != null){
	if (_userAgent.match(/iPad|GT-|SM-P|SM-T|SHW-M180|SHW-M380|SHV-E140|SHV-E150|SHW-M430|SHW-M480|SHW-M500/) != null){
		return true;
	} else {
		return false;
	}
}

/**
 * check Web/Mobile
 * @returns {Boolean}
 */
function isMobile(){
	if (_userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || _userAgent.match(/LG|SAMSUNG|Samsung/) != null){
		return true;
	} else {
		return false;
	}
}

/**
 * 클래스 .isMobile, .isWeb을 이용하여 일괄적으로 display 변경

function autoMobile(){
	if(isMobile()) {
		$('._isMobile').each(function(){
			$(this).removeClass('_isMobile');
		});
	} else {
		$('._isWeb').each(function(){
			$(this).removeClass('_isWeb');
		});
	}
}
 */
/**
 * 클래스 .isPad, .isNotPad 를 이용하여 일괄적으로 display 변경 
 
function autoPad(){
	if(isPad()) {
		$('._isPad').each(function(){
			$(this).removeClass('_isPad');
		});
	} else {
		$('._isNotPad').each(function(){
			$(this).removeClass('_isNotPad');
		});
	}
}

*/


