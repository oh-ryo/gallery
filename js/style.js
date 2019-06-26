$(function () {
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        $('head').append('<link>');
        $('head').children(':last').attr({rel:'stylesheet',href:'css/sp-style.css'});
        $(".arrow").remove();
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        $('head').append('<link>');
        $('head').children(':last').attr({rel:'stylesheet',href:'css/tab-style.css'});
    } else {

    }
})