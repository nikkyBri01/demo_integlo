$(document).ready(function(){

    var ancho = $(window).width();
    var altura = $(window).height();

	//Aplicar efecto en todas las alturas menores de 1024 de arriba hacia abajo
	if(altura <= 1024){
		$(window).scroll(function(){
			var barra = $(window).scrollTop();
			var posicion = barra * 0.45;
	
			$('.parallax').css({
				'background-position': '0 ' + posicion + 'px'
			});
		});
	}

	//Aplicar efecto en todas las alturas mayores a 1024 de abajo hacia arriba
    if (altura >= 1024){
		$(window).scroll(function(){
            var barra = $(window).scrollTop();
            var posicion = barra * 0.55;
    
            $('.parallax').css({
                'background-position': '0 -' + posicion + 'px'
            });
        });
	}
    //DesactivaR el background-size:cover para dispositivos pequeños;
	if (ancho <= 992){
		$('parallax').css({
			'background-size': 'initial'
		});
	}
});
