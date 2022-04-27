/*BARRA DE NAVEGACIÓN*/
const body = document.body;
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
  });
  
/*BOTÓN MÓVIL*/
function toggleMenu() {
    var menu = document.getElementById('navbarNav');    
    if(menu.style.display == "block") { 
      menu.style.display = "none";
    }
    else { 
      menu.style.display = "block";
    }
  }