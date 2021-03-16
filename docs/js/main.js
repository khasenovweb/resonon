$(document).ready(function(){
    $('.sec-4__slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ["<img src=\"/img/slider-arrow-1.svg\">","<img src=\"/img/slider-arrow-2.svg\" >"],
    });

    //Навигация посередине изображения в слайдере
    $('.mobile__nav__submenu').slideUp();
    $('.has-children').click(function(){
        if ($(event.target).closest(".mobile__nav__submenu").length) return;
        $(this).find('.mobile__nav__submenu').slideToggle(300);
        $(this).toggleClass('active');
    });
    //END Навигация посередине изображения в слайдере

    $('[data-hamburger="showhide"]').click(function(){
        if( $('[data-mobile-nav]').hasClass('active') ) {
            $('[data-mobile-nav]').removeClass('active')
            $('body').removeClass('hidden');
            setTimeout(function(){
                $('[data-mobile-nav]').hide();
            },300);
        }else {
            $('[data-mobile-nav]').show();
            setTimeout(function(){
                $('[data-mobile-nav]').addClass('active')
                $('body').addClass('hidden');
            },1);
            
        }
    });


    $('.modal__wrapper').click(function(){
        var thisval = $(this);
        if ($(event.target).closest(".modal").length) return;
        $(this).removeClass('active');
        setTimeout(function(){
            thisval.hide();
        },300);
    });
    $('[data-modal-show]').click(function(){
        var id = $(this).attr('data-modal-show');
        $('[data-modal="'+id+'"]').css('display', 'flex');
        setTimeout(function(){
            $('[data-modal="'+id+'"]').addClass('active');
        },1);
        
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
