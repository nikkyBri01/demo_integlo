var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slid.bs.carousel', function () {
  var elemento = $('myCarousel .carousel-item-active carousel-item-start').first();
  if (elemento.prop("tagName") == "video") {
    elemento.get(0).currentTime = 0;
    elemento.get(0).play();
  }
})

myCarousel.addEventListener('slide.bs.carousel', function () {
  var elemento = $('myCarousel .carousel .slide .carousel-fade .carousel-item.active video').first();
  if (elemento.prop("tagName") == "video") {
    elemento.get(0).pause();
  }
})

//Carousel no se pause cuando el mouse pase sobre él
var myCarousel2 = document.querySelector('.carousel')
var carousel = new bootstrap.Carousel(myCarousel2, {
  pause: false
})



