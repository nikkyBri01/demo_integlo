var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slid.bs.carousel', function () {
  var elemento = $('myCarousel .carousel-item-active').first();
  if (elemento.prop("tagName") == "video") {
    elemento.get(0).play();
    //elemento.get(0).load();//
  }
})

myCarousel.addEventListener('slide.bs.carousel', function () {
  var elemento = $('myCarousel .carousel .slide .carousel-fade .carousel-item.active video').first();
  if (elemento.prop("tagName") == "video") {
    elemento.get(0).pause();
  }
})








