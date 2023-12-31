  // logo carousel
  $(".logo-carousel-inner").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    margin: 30,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:true
        }
    }
});