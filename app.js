let textIngresado;
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

function encriptar(){
    validarTexto()

}

function desencriptar(){

}

function validarTexto(){
    //selecciona el elemento textArea, de donde sacaremos el valor;
    textIngresado = document.querySelector(".texto-a-analizar").value;
    //verificamos si lo que ingresó el usuario
    if(textIngresado === ""){
        alert("No ha ingresado ningun tipo de texto");
    
        //suaremos la funcion test para comprobar si todo está en minúsculas y sin acentos
    }else if(!textoValido.test(textIngresado)){
              
        alert("el texto ingesado solo debe estar compuesto por minúsculas y sin acentos");
    }else{
        alert(textIngresado);
    }
}

