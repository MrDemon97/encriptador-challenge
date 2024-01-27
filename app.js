let textIngresado = "";
let portapapeles = "";

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
const textoValido = /^[a-z ñ\s]+$/;

//Selectores de elementos HTM
let imagenLupa = document.querySelector(".logo-lupa");



/* Al hacer click en uno de los dos botones para encriptar o desencriptar se ejecuta esta función
recibe como parametro la eleccion del usuario */
function sistemaEncriptador(opcion) {
    
    //selecciona el elemento textArea, de donde sacaremos el valor;
    textIngresado = document.querySelector(".texto-a-analizar").value;
    
    // guardamos el tecto ingresado por el usuario en una variable
    let mensajeClave = textIngresado;

/*  validamos si el mensaje fue válido medainte la funcion validar texto, que retornará true si es valido;
    Con el resultado de la validación  hacemos un if para saber cuál acción realizar */
    if (validarTexto() === true) {

       /*  Si el resultado de la comparación es true ejecutaremos la siguiente comparación en la que usaremos la opcion del usuario*/
       // si el usuario elije  encriptar 
        if (opcion === 1) {
            
            // se llama a la funcion encriptado con el mensaje clave dentro de funcion validar busqueda.
            // llamamos a la funcion validar busqueda pasando como parametros el mensaje encriptado y el mensaje desencriptado 
            validarBusqueda(mensajeClave,encriptador(mensajeClave));

            // Como al pulsar el boton desencriptar pasamos 2  como parámetro a la función sistemaEncriptador, se ejecuta la encriptar
           } else{
            
            // se llama a la funcion encriptado con el mensaje clave dentro de funcion validar busqueda.
            // llamamos a la funcion validar busqueda pasando como parametros el mensaje encriptado y el mensaje desencriptado 
            validarBusqueda(mensajeClave,desencriptador(mensajeClave));      
           }
    } else {
        //Si el texto ingresado no es valido, se optiene el valor del textarea
        textIngresado = document.querySelector(".texto-a-analizar").value;
        return;
    }
}

function validarTexto() {
    //Si el usaurio no ingreso nada se muestra mensaje de error
    if (textIngresado === "") {
        mostrarResultado("error", "No ha ingresado ningun tipo de texto");
        
        //es valido? no
        return false;

        /*Si el usuario si ingreso algo entoces  llamamos ala funcion test() para comprobar si todo está en minúsculas y 
        sin acentos, haciendo la comparacion con la expresion regular declarada arriba*/

        /* Si el resulatado al comparar concide con la expresion regular (si todas son minusculas devuelve true, sino devuelve false), por tanto
        al no coincidir retorna false, pero con ! negamos y convertimos en true para que se pueda ejecutar if */
        
    } else if (!textoValido.test(textIngresado)) {
        //como sabemos que no es lo que queemos mostramos este mensaje
        mostrarResultado("error", "¡Recuerda! Sólo letras minúsculas y sin acentos");
        return false;

        //alert("!Recuerda¡ Sólo letras minúsculas");
        } else {
            //si se ejecuta esta linea quiere decir que el mensaje cumple los criterios por tanto damos la comparacion como pasada
            return true;
        }
}

function validarBusqueda(textoInicial,TextoFinal){
    // Si la clave
    if (textoInicial === TextoFinal) {
        mostrarResultado("Mensaje no encontrado", "");
     } else {
        mostrarResultado("", TextoFinal);
    }
    return;
} 

function mostrarResultado(resultadoBusqueda, mensaje) {
    //Seleccionamos los elementos que se encargan de mostrar mensajes.

    let mostradorNoticia = document.querySelector(".noticia");
    let mostradorMensaje = document.querySelector(".mensaje-optenido");

    if (resultadoBusqueda === "error") {
        interruptorimagen(false);
        mostradorNoticia.innerHTML = "¡ERROR!";
        mostradorMensaje.innerHTML = mensaje;
       
    } else if (resultadoBusqueda === "Mensaje no encontrado") {
        interruptorimagen(false);
        mostradorNoticia.innerHTML = "Ningún mensaje fue encontrado";
        mostradorMensaje.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";


    } else {
        interruptorimagen(true);
        //botonCopiar.disabled = false;
        mostradorNoticia.innerHTML = "Mensaje encontrado";
        mostradorMensaje.innerHTML = mensaje;
        portapapeles = mensaje;
        
    }
 return;
}

function encriptador(encriptado) {
    /*usaremos la función replace() que devuelve una nueva 
          cadena con una, algunas, o todas las coincidencias
          de el mensaje a analizar pasamos como parametro una 
          expresion  regular /-letra-/ y la bandera g que indica 
          global, es decir que no se se detiene al primer resultado 
          el texto se debe encriptar en orden e i a o u para evitar errores*/
    encriptado = encriptado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptador(mensajeSecreto) {
    /*usaremos la función replace() que devuelve una nueva 
          cadena con una, algunas, o todas las coincidencias
          de el mensaje a analizar pasamos como parametro una 
          expresion  regular /-exprecion-/ y la bandera g que indica 
          global, es decir que no se se detiene al primer resultado 
          el texto se debe encriptar en orden e i a o u para evitar errores*/
    mensajeSecreto = mensajeSecreto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return mensajeSecreto;
}




function copiarEnPortapapeles(){
    navigator.clipboard.writeText(portapapeles);
    return;
}



function interruptorimagen(comado){
    //si recibe true
    // hacemos uso de window.innerWidth que nos dá el ancho actual de la pantalla
    if(window.innerWidth > 770){
        if(comado == true){
            imagenLupa.style.display = 'none'
          
        }else{    
            imagenLupa.style.display = 'flex';
            
        }      
    }
}    
