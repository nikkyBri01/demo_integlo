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

  //SWIPER PRODUCTOS
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 576px
      576: {
          slidesPerView: 2,
          
      },
      // when window width is <= 768px
      768: {
          slidesPerView: 3,
          
      }
  }
  });
  var mySwiper = document.querySelector('.mySwiper2').swiper

  $(".mySwiper2").mouseenter(function() {
    mySwiper.autoplay.stop();
    console.log('slider stopped');
  });

  $(".mySwiper2").mouseleave(function() {
    mySwiper.autoplay.start();
    console.log('slider started again');
  });