function slowScroll(id) { 
    var offset = 0;
    $('html, body').animate({ 
         scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
} 

$(document).ready(function(){
    $('.portfolio-slider').slick({
        arrows:true,
        speed:900,
        centerMode:true,
        centerPadding:'1px',
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

let tl = gsap.timeline();
tl.from('.header-title', {
    duration: 0.6,
    opacity: 0,
    y: 200, 

});
tl.from('.header-subtitle', {
    duration: 0.6,
    y: 200,
    opacity: 0,
});


const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
               if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
               }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 600);
}