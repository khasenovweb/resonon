$(document).ready(function(){
    $('.sec-4__slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ["<img src=\"/img/slider-arrow-1.svg\">","<img src=\"/img/slider-arrow-2.svg\" >"],
    });


    //Навигация посередине изображения в слайдере
    function slider_nav(){
        if($(window).width() <= 800) {
            var sec_4_slider_topvalue = $('.sec-4__slider__item__img__wrapper').height() / 2;
            console.log(sec_4_slider_topvalue);
            $('.sec-4__slider .owl-prev').css('top', sec_4_slider_topvalue+'px');
            $('.sec-4__slider .owl-next').css('top', sec_4_slider_topvalue+'px');
        }else {
            $('.sec-4__slider .owl-prev').css('top', '50%');
            $('.sec-4__slider .owl-next').css('top', '50%');
        }
    }
    $(window).resize(function(){
        slider_nav();
    });
    slider_nav();
    //END Навигация посередине изображения в слайдере
});
