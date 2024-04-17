$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        freeMode: false,
    });
    var swiper2 = new Swiper(".section_swiper", {
        slidesPerView: 'auto',
        spaceBetween: 0,
        mousewheel: true,
        freeMode: true,
    });
    $('.index .cnt li').not('.num03, .num04').on('mouseenter', function(){
        $('.index .cnt li').removeClass('on')
        $(this).addClass('on')
    })
    /*$('.index .cnt li').on('mouseleave', function(){
        $('.index .cnt li').removeClass('on')
    })*/
    $('.header .gnb_wrap ul li[data-link="main"]').on('click', function(){
        swiper.slideTo(0, 500)
    });
    $('.header .gnb_wrap ul li[data-link="intro"]').on('click', function(){
        swiper.slideTo(1, 500)
    });
    $('.header .gnb_wrap ul li[data-link="project"]').on('click', function(){
        swiper.slideTo(2, 500)
    });
    $('.header .gnb_wrap ul li[data-link="contact"]').on('click', function(){
        swiper.slideTo(5, 500)
    });
    $('.index ul li.kps').on('click', function(){
        swiper.slideTo(3, 500)
    });
    $('.index ul li.hospital').on('click', function(){
        swiper.slideTo(4, 500)
    });

})