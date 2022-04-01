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

/*MARQUEE FUNCIONAMIENTO DE CLONADO*/
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


/*/TOUCH EVENTS
const slide = document.querySelector(".marquee"), 
slider = Array.from(document.querySelector(".marquee-content"))

let isDragging = false, startPos = 0, currentTranslate = 0, prevTranslate = 0, 
animationID = 0, currentIndex = 0

slider.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  //Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd())
  slide.addEventListener('touchmove', touchMove())
  //Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
}) 

//Disable context menu
window.oncontextmenu = function(event){
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index){
  return function(event){
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    animationID = requestAnimationFrame(animation)
  }
}

function touchEnd(){
  isDragging = false
  cancelAnimationFrame (animationID)
}

function touchMove(event){
  if(isDragging){
    currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event){
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation(){
  setSliderPosition()
  if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition(){
  slide.style.transform = `translateX(${currentTranslate}px)`
}*/