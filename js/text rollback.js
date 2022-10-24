$(document.readyfunction(){
    var shrinkheader = 150;
    $(window).scroll(function(){
        var scroll = getCurrentScroll();
        if (scroll >= shrinkheader ) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');
        }
    })
    function getCurrentScroll({
        return window.pageYoffsert || documentElement.scrollTop;
    })
});