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

/*Carousel de productos botones
function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};

App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "buttom-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {

        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}*/

/*Autoplay carrusel*/
const carrusel = document.querySelector(".slick-list");
let sliders = document.querySelectorAll(".slick");
let sliderFinal = sliders[sliders.length -1];

const btn_prev = document.getElementById('buttom-prev');
const btn_next = document.getElementById('buttom-next');

//Metodo de movimiento de slides
carrusel.insertAdjacentElement('afterbegin', sliderFinal);
function moverNext(){
  let sliderUno = document.querySelectorAll(".slick")[0];
  carrusel.style.marginLeft = "-10%";
  carrusel.style.transition = "all 0.9s";
  setTimeout(function(){
    carrusel.style.transition = "none";
    carrusel.insertAdjacentElement("beforeend", sliderUno);
    carrusel.style.marginLeft = "-4.5%";
  }, 500);
}

function moverPrev(){
  let sliders = document.querySelectorAll(".slick");
  let sliderFinal = sliders[sliders.length -1];
  carrusel.style.marginLeft = "0%";
  carrusel.style.transition = "all 0.9s";
  setTimeout(function(){
    carrusel.style.transition = "none";
    carrusel.insertAdjacentElement('afterbegin', sliderFinal);
    carrusel.style.marginLeft = "-4.5%";
  }, 500);
}

setInterval(function(){
  moverNext()
}, 3000);


/*let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft == maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft == 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();


/*SEGUIR VIENDO EN EL MINUTO 16:11
https://www.youtube.com/watch?v=WI0aCIEYXvw
*/

