$('#myCarousel').on('slid.bs.carousel', function (e) {
    var elemento = $('#myCarousel .carousel-item.active video').first();
    if (elemento.prop("tagName") == "video") {
      elemento.get(0).play();
    }
 });
 
 $('#myCarousel').bind('slide.bs.carousel', function (e) {  
    let elemento = $('#myCarousel .carousel-item.active video').first();
    if (elemento.prop("tagName") == "video") {
      elemento.get(0).pause();
    }
 });







