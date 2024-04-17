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

    var cursor = document.querySelector(".cursor");
    var img_slide = document.querySelectorAll(".swiper-slide");
    function cursorEvent(e){
        cursor.style.top = e.pageY - scrollY + "px";
        cursor.style.left = e.pageX + "px";
    }
    window.addEventListener('mousemove', cursorEvent);
    img_slide.forEach(link =>{
        if ( link !== img_slide ){
            link.addEventListener("mouseleave", () => {
                cursor.classList.remove("on");
            });
            link.addEventListener("mouseover", () => {
                cursor.classList.add("on");
            });
        }  
    });
    /*$(".project .photo").on("mouseover", function() {
        $('.cursor').addClass('active')
    }); // Hover
    $(".project .photo").on("mouseout", function() {
         $('.cursor').removeClass('active')
    }); // Mouseout*/
})