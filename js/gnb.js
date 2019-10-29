jQuery(document).ready(function() {
  if (
    navigator.userAgent.match(
      /Android|Mobile|iPhone|iPad|iPod|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i
    )
  ) {
    jQuery(".all_menu").mobile_js();
    var $mMenuBoo = false;
    var $mMenubtn = jQuery(".jQMenu");
    var $mMenu = jQuery(".all_menu_wrap");
    var wwidth = jQuery(window).outerWidth();
    var $obj_bg = jQuery(".black_bg");
    $mMenubtn.click(function() {
      if (!$mMenuBoo) {
        wwidth = jQuery(window).outerWidth();
        wheight = jQuery(window).outerHeight();
        $obj_bg.css({ width: wwidth, height: wheight });
        $obj_bg.css("display", "block");
        $mMenubtn.find("img").chgImg(1);
        jQuery(".login_list").css("dispaly", "none");
        jQuery("#mobileFix").css({ position: "fixed", top: "51px" });
        // $mglo.stop().animate({'top': '51px'}, 500, "easeOutExpo",function(){
        // });
        //jQuery('#wrap').css({'position':'fixed','top':'54px'});
        $mMenu.css({ display: "block", position: "absolute", top: "58px" });
        $mMenu.stop().animate({ left: "0px" }, 500, "easeOutExpo", function() {
          //$mMenu.css({'display':'none'});
        });
        $mMenuBoo = true;
        $msrchBoo = false;
        //$msrch.css({'top':'0','display':'none'});
        //$msrchbtn.find('img').chgImg(0)
      } else {
        // $mglo.stop().animate({'top': '-1430px'}, 500, "easeOutExpo",function(){

        // });
        $obj_bg.css("display", "none");
        jQuery("#mobileFix").css({ position: "inherit", top: "0" });
        $mMenu.css({ position: "absolute", top: "58px" });
        $mMenu.stop().animate({ left: wwidth }, 500, "easeOutExpo", function() {
          $mMenu.css({ display: "none" });
        });
        $mMenubtn.find("img").chgImg(0);
        $mMenuBoo = false;
      }
    });
  } else {
    //web menu
    jQuery(".gnb").gnb_js();
    var $gnbDep2 = jQuery(".gnb .dep2");
    jQuery(".gnb").mouseenter(function() {
      jQuery(".gnb_bg").css("display", "block");
      $gnbDep2.css("display", "block");

      jQuery(".gnb_bg")
        .stop()
        .animate({ height: "420px" }, 300, "easeOutExpo", function() {});
      $gnbDep2
        .stop()
        .animate({ height: "420px" }, 300, "easeOutExpo", function() {});
      // $gnbDep2.stop().animate({'opacity': '1'}, 500, "easeOutExpo", function() {
      // });
    });
    jQuery(".gnb").mouseleave(function() {
      jQuery(".gnb_bg")
        .stop()
        .animate({ height: "0" }, 500, "easeOutExpo", function() {});
      $gnbDep2.stop().animate({ height: "0" }, 500, "easeOutExpo", function() {
        jQuery(this).css("display", "none");
        jQuery(".gnb_bg").css("display", "none");
      });
      /*$gnbDep2.stop().animate({'opacity': '0'}, 300, "easeOutExpo", function() {
				
			});*/
    });
  }
});

// 웹 메뉴
jQuery.fn.gnb_js = function() {
  var _this = this;
  //gnb
  function GNB() {
    var o = _this;
    var d1 = o.find(".d1");
    var d1A = o.find(".d1>a");
    var d2 = o.find(".dep2");
    var d2A = o.find(".dep2 > ul >.d2 > a");
    var d1A_on = d1A.filter(".active");
    var d2_on = d2.filter(".active");
    var d2A_on = d2A.filter(".active");
    var timer;
    //처음 상태
    function reset() {
      var el_dep1 = d1A_on;
      var el_dep2 = d2A_on;
      //2뎁스 활성화시 아래 주석 풀기
      if (
        !d2A_on
          .parents(".dep2")
          .eq(0)
          .filter(":visible").length
      ) {
        menuOn(el_dep1, d2_on);
      }
      subOn(d2A_on);
    }

    //1depth off
    function menuOff() {
      var curr_dep2 = d2.filter(":visible");
      var curr_dep1 = curr_dep2.prev();
      curr_dep1.removeClass("active");
      d1A.find("img").chgImg(0);
      curr_dep2.find("a").removeClass("active");
    }

    //1depth on
    function menuOn(el_dep1, el_dep2) {
      menuOff();
      el_dep1.addClass("active");
      el_dep1.find("img").chgImg(1);
    }

    //2depth on
    function subOn(el) {
      d2A.removeClass("active");
      el.addClass("active");
      d1A.removeClass("active");
      el.parent()
        .parent()
        .parent()
        .prev()
        .addClass("active");
    }

    //활성화 상태인지 체크
    function chkCurr(el) {
      if (el.filter(":visible").length) {
        return true;
      } else {
        //
        return false;
      }
    }
    //1depth mouseover
    d1A.each(function(i) {
      jQuery(this).mouseover(function() {
        clearReset();
        var el_dep1 = jQuery(this);
        var el_dep2 = d2.eq(i);
        menuOn(el_dep1, el_dep2);
      });
    });
    //2depth mouseover
    d2A.mouseover(function() {
      clearReset();
      subOn(jQuery(this));
    });

    //처음 상태로 가기 취소
    function clearReset() {
      clearTimeout(timer);
    }

    //완전히 벗어나면 처음 상태로 가기
    o.mouseleave(function() {
      clearReset();
      timer = setTimeout(function() {
        reset();
      }, 500);
    });

    reset();
  }

  //현재 페이지에 on class
  function setTopNaviCurrentDepth() {
    if (typeof getCurrentDepth != "function") {
      GNB();
      return;
    }
    var currentDepth = currentDep;
    console.log("currentDepth : " + currentDepth);
    var depth1 = parseInt(currentDepth.substr(0, 1) - 1);
    var depth2 = parseInt(currentDepth.substr(2, 2) - 1);

    if (depth1 >= 0) {
      var o = jQuery(".dep1");
      var d1A = o.find(".d1>a").eq(depth1);
      var d2 = o
        .find(".d1")
        .eq(depth1)
        .find(".dep2_wrap");
      var d2A = d2.find("a").eq(depth2);
      var bor = jQuery("#new_gnb");
      var speed = 0;
      var timer;
      d1A.addClass("active");
      d1A.find("img").chgImg(1);
      d2.addClass("active");
      d2A.addClass("active");
    }
    GNB();
  }
  setTopNaviCurrentDepth();
};

// 모바일 메뉴
jQuery.fn.mobile_js = function() {
  var _this = this;
  //gnb
  function GNB() {
    var o = _this;
    var d1 = o.find(".d1");
    var d1A = o.find(".d1>a");
    var d2 = o.find(".dep2_wrap");
    var d2A = o.find(".dep2 >.d2 > a");
    var d3 = o.find(".dep3");
    var d3A = o.find(".dep3>.d3 > a");
    var d1A_on = d1A.filter(".active");
    var d2_on = d2.filter(".active");
    var d2A_on = d2A.filter(".active");
    var d3_on = d3.filter(".active");
    var d3A_on = d3A.filter(".active");
    var timer;
    //처음 상태
    function reset() {
      var el_dep1 = d1A_on;
      menuOn(el_dep1, d2_on);
    }

    //1depth off
    function menuOff() {
      var curr_dep3 = d3.filter(":visible");
      var curr_dep2 = d2.filter(":visible");
      var curr_dep1 = curr_dep2.prev();
      curr_dep1.removeClass("active");
      d1A.removeClass("active");
      d1A.find("img").chgImg(0);
      //curr_dep2.css({'display':'none','opacity':0});
      curr_dep2.stop().slideUp(200);
      curr_dep2.find("a").removeClass("active");
      curr_dep3.find("a").removeClass("active");
      //d3.css({'display':'none','opacity':0});
      d3.stop().slideUp(200);
    }

    //1depth on
    function menuOn(el_dep1, el_dep2) {
      menuOff();
      el_dep1.addClass("active");
      //d2A_on.addClass("active");
      //el_dep2.css({'display':'block','opacity':1});
      el_dep2.slideDown(200);
      el_dep1.find("img").chgImg(1);
    }

    //2depth on
    function subOn(el) {
      d1A.removeClass("active");
      d2A.removeClass("active");
      el.addClass("active");
      //d3.css({'display':'none','opacity':0}); // 3dep 활성화
      d3.stop().slideUp(200);
      //el.next().css({'display':'block','opacity':1}); // 3dep 활성화
      el.next().slideDown(200);
      //	d1A.find('img').chgImg(0);
      el.parent()
        .parent()
        .parent()
        .prev()
        .addClass("active"); // 투뎁스 전체보기 했을시 적용
      d2A.find("img").chgImg(0);
      el.find("img").chgImg(1);
      //el.parent().parent().prev().find('img').chgImg(1); // 투뎁스 전체보기 했을시 적용
    }

    //활성화 상태인지 체크
    function chkCurr(el) {
      if (el.filter(":visible").length) {
        return true;
      } else {
        //
        return false;
      }
    }
    //1depth mouseover
    d1A.each(function(i) {
      jQuery(this).click(function() {
        if (jQuery(this).hasClass("active") == true) {
          jQuery(this).removeClass("active");
          d1A.find("img").chgImg(0);
          var curr_dep2 = d2.filter(":visible");
          //curr_dep2.css({'display':'none','opacity':0});
          curr_dep2.stop().slideUp(200);
          d2A.removeClass("active");
          d2A.find("img").chgImg(0);
          var curr_dep3 = d3.filter(":visible");
          curr_dep3.css({ display: "none", opacity: 0 });
          curr_dep3.stop().slideUp(200);
        } else {
          clearReset();
          var el_dep1 = jQuery(this);
          var el_dep2 = el_dep1.next(); //d2.eq(i);
          menuOn(el_dep1, el_dep2);
        }
      });
    });
    //2depth mouseover
    d2A.click(function() {
      if (jQuery(this).hasClass("active") == true) {
        jQuery(this).removeClass("active");
        d2A.find("img").chgImg(0);
        var curr_dep3 = d3.filter(":visible");
        //curr_dep3.css({'display':'none','opacity':0});
        curr_dep3.stop().slideUp(200);
      } else {
        clearReset();
        subOn(jQuery(this));
      }
    });

    //처음 상태로 가기 취소
    function clearReset() {
      clearTimeout(timer);
    }

    reset();
  }

  //현재 페이지에 on class
  function setTopNaviCurrentDepth() {
    if (typeof getCurrentDepth != "function") {
      GNB();
      return;
    }
    var currentDepth = String(getCurrentDepth());
    var depth1 = parseInt(currentDepth.substr(0, 2) - 1);
    var depth2 = parseInt(currentDepth.substr(2, 2) - 1);

    if (depth1 >= 0) {
      var o = jQuery(".dep1");
      var d1A = o.find(".d1>a").eq(depth1);
      var d2 = o
        .find(".d1")
        .eq(depth1)
        .find(".dep2_wrap");
      var d2A = d2.find("a").eq(depth2);
      var bor = jQuery("#new_gnb");
      var speed = 0;
      var timer;
      d1A.addClass("active");
      d1A.find("img").chgImg(1);
    }
    GNB();
  }

  //setTopNaviCurrentDepth();
};
