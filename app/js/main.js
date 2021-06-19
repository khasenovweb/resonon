$(document).ready(function(){
    $('.sec-4__slider').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ["<img src=\"/img/slider-arrow-1.svg\">","<img src=\"/img/slider-arrow-2.svg\" >"],
    });

    //Мобильное меню
    $('.mobile__nav__links .menu-item-has-children a').eq(0).attr('href', '#');
    
    $('.mobile__nav__links .sub-menu').slideUp();
    $('.mobile__nav__links .menu-item-has-children').click(function(){
        if ($(event.target).closest(".mobile__nav__links .sub-menu").length) return;
        $(this).find('.sub-menu').slideToggle(300);
        $(this).toggleClass('active');
    });
    //END Мобильное меню

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
