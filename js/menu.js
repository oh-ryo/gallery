//ハンバーガーメニュートップ戻り用
var menutop = document.createElement("li");
menutop.classList.add("menu-top");
menutop.innerHTML = "TOP";
document.getElementsByClassName("menu-box") [0].appendChild(menutop);
$('.menu-top').on('click', function(){
    $(function(){
        location.reload();
    });
});

for(let i = 0, len = menulist.length; i < len; i++) {
    var menu = document.createElement("li");
    menu.classList.add(menulist[i]);
    menu.innerHTML = menulist[i].toUpperCase();
    document.getElementsByClassName("menu-box") [0].appendChild(menu);
}

(function($) {
    $(function() {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);
