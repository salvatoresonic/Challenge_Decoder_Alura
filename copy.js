
var botonCopiar = document.querySelector("#btn-copy");
var messageCopiado = document.querySelector("#message")
botonCopiar.addEventListener("click", copyToClipboard);

//funcion que copia al clipboard
function copyToClipboard(event){
    event.preventDefault();
    var copyText = document.querySelector("#msg");
    navigator.clipboard.writeText(copyText.value).then(function(){
        console.log("Se copió al portapapeles")
    },function(){
        console.log("falló copiarse al portapapeles")
    })
    messageCopiado.innerHTML = "Copiado al portapapeles"
    setTimeout(()=> messageCopiado.innerHTML = "", 2000)     
}


