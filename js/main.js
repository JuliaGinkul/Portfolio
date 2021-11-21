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
    });
});

let tl = gsap.timeline();
tl.from('.letter', {
    duration: 1,
    opacity: 1,
    stagger: 0.25,
    color: '#ffdf21',  
});