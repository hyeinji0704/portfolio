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
})