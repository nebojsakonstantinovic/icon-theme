$(document).ready(function () {


    //spy-scroll

    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    
    
    // header smanjivanje
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
            $('header').css('background-color', 'rgba(0,0,0,0.6)');
            $('.navbar-brand').addClass('small-logo');
        } else {
            $('header').removeClass('py-2');
            $('header').css('background-color', 'rgba(0,0,0,0.3)');
            $('.navbar-brand').removeClass('small-logo');
        }
    });
});