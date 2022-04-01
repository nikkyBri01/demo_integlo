/*BARRA DE NAVEGACIÓN*/
/*const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
  
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // abajo
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // arriba
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });*/

  ubiP = window.pageYOffset;
  window.onscroll = function() {
      let UbiA = window.pageYOffset;
      if(ubiP > UbiA){
          document.getElementById('nav').style.top = '0px';
          /*console.log('Ubicacion Principal')
          console.log(ubiP)
          console.log('desplazamiento')
          console.log(UbiA)*/
      }
      else{
          document.getElementById('nav').style.top = '-95px';
      }
      ubiP = UbiA;
    }
  
/*BOTÓN MÓVIL*/
function toggleMenu() {
    var menu = document.getElementById('navbarNav');    
    if(menu.style.display == "block") { // if is menuBox displayed, hide it
      menu.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      menu.style.display = "block";
    }
  }