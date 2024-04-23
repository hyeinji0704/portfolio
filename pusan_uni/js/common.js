$(document).ready(function(){
    $('.header_top .tnb .service .open').on('click', function(){
        $('.header_top .tnb .service').addClass('on')
    })
    $('.header_top .tnb .service .close').on('click', function(){
        $('.header_top .tnb .service').removeClass('on')
    })
})