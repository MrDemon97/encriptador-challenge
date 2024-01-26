let textIngresado;
textIngresado="";
/* creamos una constante en la cual almacenamos una expresión regular 
NOTA : / Delimita el inicio y final de la expresión
       ^ Inica el inicio de la línea
       $ Indica el final de línea
       + Indica que el patrón debe aparecer por lo
          menos una vez
       []Define caracteres que se van a incluir en el conjunto
       a-z carácteres minúsculos del alfabeto
       \s carácter que le dice al pc que es un espacion en blanco
        */    
const textoValido = /^[a-z\s]+$/

function sistemaEncriptador(opcion){
    //selecciona el elemento textArea, de donde sacaremos el valor; 
    textIngresado = document.querySelector(".texto-a-analizar").value;        
    //verificamos si lo que ingresó el usuario
    let mensajeClave = textIngresado;
    //validamos si el mensaje fue válido;
    if(validarTexto() === true){
        if(opcion === 1){
            mensajeClave = encriptador(mensajeClave);
            mostrarResultado("",mensajeClave);
        }else if (opcion ===2) {
            let text = mensajeClave;
            mensajeClave = desencriptador(mensajeClave);
            if(text === mensajeClave){
                mostrarResultado("Mensaje no encontrado","");
            }else{
                mostrarResultado("",mensajeClave);
            }            
        }        
    }else{
        
    }
    
}



function validarTexto(){

    if(textIngresado === ""){
         mostrarResultado('Error','No ha ingresado ningun tipo de texto');
         return false;

    //usaremos la funcion test() para comprobar si todo está en minúsculas y sin acentos
    }else if(!textoValido.test(textIngresado)){
        mostrarResultado('error','¡Recuerda! Sólo letras minúsculas');
        return false;
        //alert("!Recuerda¡ Sólo letras minúsculas");
    }else{
        //
        return true;
        
    }
}

function mostrarResultado(resultadoBusqueda,mensaje){
    //Seleccionamos los elementos que se encargan de mostrar mensajes.
    
    let mostradorNoticia = document.querySelector(".noticia");
    let mostradorMensaje = document.querySelector(".mensaje-optenido");

    
    if(resultadoBusqueda==="error"){
        mostradorNoticia.innerHTML = "¡ERROR!";
        mostradorMensaje.innerHTML = mensaje;
    }else if(resultadoBusqueda==="Mensaje no encontrado"){
        mostradorNoticia.innerHTML = resultadoBusqueda;
        mostradorMensaje.innerHTML= mensaje;
    }else{ 
        mostradorNoticia.innerHTML = "Mensaje encontrado";
        mostradorMensaje.innerHTML= mensaje;
    }
}

function encriptador(encriptado){

    /*usaremos la función replace() que devuelve una nueva 
        cadena con una, algunas, o todas las coincidencias
        de el mensaje a analizar pasamos como parametro una 
        expresion  regular /-letra-/ y la bandera g que indica 
        global, es decir que no se se detiene al primer resultado 
        el texto se debe encriptar en orden e i a o u para evitar errores*/ 
        encriptado = encriptado
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        return encriptado;
}

function desencriptador(mensajeSecreto){
        /*usaremos la función replace() que devuelve una nueva 
        cadena con una, algunas, o todas las coincidencias
        de el mensaje a analizar pasamos como parametro una 
        expresion  regular /-exprecion-/ y la bandera g que indica 
        global, es decir que no se se detiene al primer resultado 
        el texto se debe encriptar en orden e i a o u para evitar errores*/ 
        mensajeSecreto = mensajeSecreto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        return mensajeSecreto;

}

