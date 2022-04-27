//SWIPER CERTIFICACIONES
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 700,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  var mySwiper = document.querySelector('.mySwiper').swiper

  $(".mySwiper").mouseenter(function() {
    mySwiper.autoplay.stop();
    console.log('slider stopped');
  });

  $(".mySwiper").mouseleave(function() {
    mySwiper.autoplay.start();
    console.log('slider started again');
  });

