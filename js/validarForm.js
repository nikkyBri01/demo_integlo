function esNumero(dato){
    var numeros = "^[0-9]+$";
    if(dato.match(numeros))
        return true;
    else
        return false;
}

//VALIDACIONES CUANDO SE HACE ENTER
    function validarNombre(){
        var nom = formulario.nombre.value; 
        var tecla = window.event.keyCode; 
        if(tecla == 13){
            if(esNumero (nom) || nom == "" || nom.charAt(0) == ""){
                alert("Dato inválido... Solo se aceptan letras. Recuerde digitar más de 5 caracteres");
                formulario.nombre.focus(); 
                formulario.nombre.style.backgroundColor= "lightgray"; 
                formulario.nombre.value= ""; 
            }
            else{
                formulario.nombre.style.backgroundColor= "white";
                formulario.nombre.value = nom;
                formulario.correo.focus(); 
            }
        }
    }

    function validarCorreo(){
        var correo = formulario.correo.value; 
        var tecla = window.event.keyCode; 
        if(tecla == 13){
            if(correo == ""  || charAt(0) ==""){
                alert("Dato inválido, está vacío... Recuerde digitar su correo");
                formulario.correo.focus(); 
                formulario.correo.style.backgroundColor= "lightgray";  
            }
            else{
                formulario.correo.style.backgroundColor= "white";
                formulario.correo.value = correo;
                formulario.asunto.focus(); 
            }
        }
    }

    function validarAsunto(){
        var asunto = formulario.asunto.value; 
        var tecla = window.event.keyCode; 
        if(tecla == 13){
            if(asunto == ""  || charAt(0)==""){
                alert("Dato inválido... Llene el campo");
                formulario.asunto.focus(); 
                formulario.asunto.style.backgroundColor= "lightgray";  
            }
            else{
                formulario.asunto.style.backgroundColor= "white"; 
                formulario.asunto.value = curso;
                formulario.mensaje.focus(); 
            }
        }
    }

    function validarMensaje(){
        var msj = formulario.mensaje.value; 
        var tecla = window.event.keyCode; 
        if(tecla == 13){
            if(msj == ""  || charAt(0)==""){
                alert("Dato inválido... Llene el campo");
                formulario.msj.focus(); 
                formulario.msj.style.backgroundColor= "lightgray";  
            }
            else{
                formulario.msj.style.backgroundColor= "white"; 
                formulario.msj.value = curso;
                formulario.msj.focus(); 
            }
        }
    }
    /*Validación general*/
    function validarForm(){
        vali = false;
        nombre = formulario.nombre.value;
        correo = formulario.correo.value;
        asunto= formulario.asunto.value;
        mensaje = formulario.mensaje.value;

        //Validaciones múltiples
        if(nombre == "" || correo =="" || asunto =="" || mensaje =="")
            vali = true;  

        //validar formulario
        if(vali == true){
            alert("Formulario de contacto incompleto, revise los campos");
            return false;
        }
        else{
            alert("Su solicitud será enviada con éxito, espere nuestra pronta respuesta. ¡Gracias por la preferencia!");
            return true;
        }

        }
        