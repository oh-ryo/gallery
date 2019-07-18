//ハンバーガーメニュートップ戻り用
const menutop = document.createElement("li");
menutop.classList.add("menu-top");
menutop.innerHTML = "TOP";
document.getElementsByClassName("menu-box") [0].appendChild(menutop);
$('.menu-top').on('click', ()=>{
    $(function(){
        location.reload();
    });
});

for(let i = 0, len = menulist.length; i < len; i++) {
    const menu = document.createElement("li");
    menu.classList.add(menulist[i]);
    menu.innerHTML = menulist[i].toUpperCase();
    document.getElementsByClassName("menu-box") [0].appendChild(menu);
}

(function($) {
    $(function() {
        const $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(()=>{
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(()=>{
            $header.toggleClass('open');
        });
    });
})(jQuery);
