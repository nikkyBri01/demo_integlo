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

/*Carousel de productos botones*/
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
}

/*Autoplay carrusel*/
const carrusel = document.querySelector(".slick-list");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
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




