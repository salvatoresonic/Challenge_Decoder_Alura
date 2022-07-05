
var cajaIngreso = document.querySelector("#form-ingreso")
var espacioIngresoDatos = document.querySelector("#input-texto")
var botonEncriptar = document.querySelector("#btn-encriptar");


botonEncriptar.addEventListener("click", function (event){
    
    event.preventDefault();
    var espacioIngresoDatos = document.querySelector("#input-texto")

    var textoAEncriptar = espacioIngresoDatos.value;
    
    textoEncriptado = textoAEncriptar.replace(/e/g,"enter",)  
    textoEncriptado2 = textoEncriptado.replace(/i/g,"imes")
    textoEncriptado3 = textoEncriptado2.replace(/a/g,"ai")
    textoEncriptado4 = textoEncriptado3.replace(/o/g,"ober")
    textoEncriptado5 = textoEncriptado4.replace(/u/g,"ufat")
    
    var mensajeResultado = document.querySelector("#msg");
    
    mensajeResultado.innerHTML = textoEncriptado5
    

})


/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

