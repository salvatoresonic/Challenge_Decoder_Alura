
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var espacioIngresoDatos = document.querySelector("#input-texto")
var cajaIngreso = document.querySelector("#form-ingreso")

botonDesencriptar.addEventListener("click", function (event){
    
    event.preventDefault();
    var espacioIngresoDatos = document.querySelector("#input-texto")
    var textoADesencriptar = espacioIngresoDatos.value;
    textoDesencriptado = textoADesencriptar.replace(/enter/g,"e",)  
    textoDesencriptado2 = textoDesencriptado.replace(/imes/g,"i")
    textoDesencriptado3 = textoDesencriptado2.replace(/ai/g,"a")
    textoDesencriptado4 = textoDesencriptado3.replace(/ober/g,"o")
    textoDesencriptado5 = textoDesencriptado4.replace(/ufat/g,"u")
    
    var mensajeResultado = document.querySelector("#msg");
    mensajeResultado.value = textoDesencriptado5
})

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
