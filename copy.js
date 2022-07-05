
var botonCopiar = document.querySelector("#btn-copy");
var messageCopiado = document.querySelector("#message")
var mensajeBorrado = document.querySelector(".text-input-ingreso")

console.log(messageCopiado)
botonCopiar.addEventListener("click", copyToClipboard);

//funcion que copia al clipboard
function copyToClipboard(event){
    event.preventDefault();
    
    var copyText = document.querySelector("#msg");
    
    navigator.clipboard.writeText(copyText.innerHTML).
    then(function(){
        
        console.log("Se copió al portapapeles")

    },function(){
        console.log("falló copiarse al portapapeles")
    })
    
    messageCopiado.innerHTML = "Mensaje copiado al portapapeles"
    setTimeout(()=> messageCopiado.innerHTML = "", 4000)   
    
}


