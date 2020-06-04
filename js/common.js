/* ========================================================
幅変更リロード
======================================================== */

var ua = window.navigator.userAgent.toLowerCase();

if (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('edge') === -1){
$(function(){
    var timer = false;
    var prewidth = $(window).width();
    $(window).resize(function() {
        if (timer !== false) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            var nowWidth = $(window).width();
            if(prewidth !== nowWidth){
        // リロード
                location.reload();
            }
            prewidth = nowWidth;
        }, 100);
    });
});
}

/* ========================================================
VIEWPORT変更
======================================================== */
var metaDiscre = document.head.children;
var metaLength = metaDiscre.length;
if(window.matchMedia("(min-width: 641px)").matches){
    for(var i = 0;i < metaLength;i++){
        var proper = metaDiscre[i].getAttribute('name');
        if(proper === 'viewport'){
            var dis = metaDiscre[i];
            dis.setAttribute('content','width=1000');
        }
    }
} else {}

/* ========================================================
スムーズスクロール
======================================================== */
$(function(){
    $('a[href^="#"]:not(a.no-scrl)').on('click',function(){
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

/* ========================================================
Mouse Over
======================================================== */
function smartRollover() {
  if (document.getElementsByTagName) {
    var images = document.getElementsByTagName("img");
    for (var i=0; i < images.length; i++) {
      if (images[i].getAttribute("src").match("_off.")) {
        images[i].onmouseover = function() {
          this.setAttribute("src", this.getAttribute("src").replace("_off.","_on."));
        }
        images[i].onmouseout = function() {
          this.setAttribute("src", this.getAttribute("src").replace("_on.","_off."));
        }
      }
    }
  }
}
if (window.addEventListener) {
    window.addEventListener("load",smartRollover,false);
} else if (window.attachEvent) {
    window.attachEvent("onload",smartRollover);
}
$(function(){
    $('a img')
    .bind('touchstart', function() {
      $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  });
});

$(function(){
    $('.js-navbtn').click(function () {
        $(this).toggleClass('active');
        $('.nav-wrap').fadeToggle();
        $('nav').toggleClass('open');
        $('body').toggleClass('noscroll');
    })
    $('.nav-wrap').click(function () {
        $(this).fadeOut();
        $('.js-navbtn').removeClass('active');
        $('nav').removeClass('open');
        $('body').removeClass('noscroll');
    });
});

$(function(){
    var target = $("body").attr("data-page");
    $(".gnav_item").each(function() {
        if( $(this).attr("data-crrt") == target ) {
            $(this).addClass("crrt");
        }
    });
});
/* ========================================================
ページ送り
======================================================== */
function onLink(i){
    var url = location.pathname;
    url=url.split("\.")[0].slice(-2);
    location.href=""+"page"+("00"+(parseInt(url)+i)).slice(-2)+".html";
}
/* -----------------------------------------------------------
/* ========================================================
トップへスクロールボタン
======================================================== */
$(document).ready(function(){
    $("#topBtn").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 10) {
            $("#topBtn").fadeIn("fast");
        } else {
            $("#topBtn").fadeOut("fast");
        }
    });
    $('#topBtn').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 400);
        return false;
    });
});
