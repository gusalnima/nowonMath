$(document).ready(function() {
  if (
    navigator.userAgent.match(
      /Android|Mobile|iPhone|iPad|iPod|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i
    )
  ) {
  } else {
    visualHeight();
    headerScroll();
  }
});

function visualHeight() {
  var visual = $(".visual-height-full"),
    liH = $(".m_ban_slider li"),
    winH = $(window).width(),
    winH = $(window).height();

  if (visual.length > 0) {
    if ($(window).height() < 850) {
      visual.css("height", 850);
      liH.css("height", 850);
    } else {
      visual.css("height", winH + "px");
      liH.css("height", winH + "px");
    }
  }
}

function headerScroll() {
  var wrapScroll = $(window).scrollTop(),
    header = $("#header_wrap"),
    menu = $(".gnb_wrap");
  $(window).scroll(function() {
    wrapScroll = $(window).scrollTop();
    if (wrapScroll >= 40) {
      header.addClass("header-scroll");
      menu.addClass("header-scroll");
    } else {
      header.removeClass("header-scroll");
      menu.removeClass("header-scroll");
    }
  });
}

$(window).resize(function() {
  if (
    navigator.userAgent.match(
      /Android|Mobile|iPhone|iPad|iPod|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i
    )
  ) {
  } else {
    visualHeight();
    headerScroll();
  }
});
