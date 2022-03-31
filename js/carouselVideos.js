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

/*Autoplay carrusel
const carrusel = document.querySelector(".slick-list");
let sliders = document.querySelectorAll(".slick");
let sliderFinal = sliders[sliders.length -1];

const btn_prev = document.getElementById('buttom-prev');
const btn_next = document.getElementById('buttom-next');

//Metodo de movimiento de slides
carrusel.insertAdjacentElement('afterbegin', sliderFinal);
function moverNext(){
  let sliderUno = document.querySelectorAll(".slick")[0];
  carrusel.style.marginLeft = "2%";
  carrusel.style.transition = "linear 0.3s";
  setTimeout(function(){
    carrusel.style.transition = "none";
    carrusel.insertAdjacentElement("beforeend", sliderUno);
    carrusel.style.marginLeft = "-4.5%";
  }, 500);
}

function moverPrev(){
  let sliders = document.querySelectorAll(".slick");
  let sliderFinal = sliders[sliders.length -1];
  carrusel.style.marginLeft = "2%";
  carrusel.style.transition = "linear 0.3s";
  setTimeout(function(){
    carrusel.style.transition = "none";
    carrusel.insertAdjacentElement('afterbegin', sliderFinal);
    carrusel.style.marginLeft = "-4.5%";
  }, 500);
}*/

/*MARQUEE FUNCIONAMIENTO*/
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
