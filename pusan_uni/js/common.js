$(document).ready(function(){
    $('.header .gnb .depth01 > li').on('mouseenter', function(){
        $('.header').addClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header .gnb .depth01 > li').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
        $('.header .gnb .depth01 > li').removeClass('on')
    })
    $('.header .gnb .depth02 > li').on('mouseenter', function(){
        $('.header .gnb .depth02 > li').removeClass('on')
        $(this).addClass('on')
    })
    $('.header_top .tnb .service .open').on('click', function(){
        $('.header_top .tnb .service').addClass('on')
    })
    $('.header_top .tnb .service .close').on('click', function(){
        $('.header_top .tnb .service').removeClass('on')
    })
    $('.header_top .tnb .lang .open').on('click', function(){
        $('.header_top .tnb .lang').addClass('on')
    })
    $('.header_top .tnb .lang .close').on('click', function(){
        $('.header_top .tnb .lang').removeClass('on')
    })
})