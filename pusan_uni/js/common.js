$(document).ready(function(){
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