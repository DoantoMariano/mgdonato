$(document).ready(function() {

    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0rem'
        }, 1000);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.ir-arriba').slideDown(500);
        } else {
            $('.ir-arriba').slideUp(500);
        }
    });

});