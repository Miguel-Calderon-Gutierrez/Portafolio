const enviarMensaje = () =>{
    console.log();

    let mail = document.createElement("a");
    let asunto = "hola mundo soy Miguel"
    let Mensaje = "Este es el mensaje a enviar"
    
    asunto = asunto.replace(/ /gi, "%20");
    Mensaje = Mensaje.replace(/ /gi, "%20");

    referencia = "mailto:miguelcalderon.dev@gmail.com?subject="+asunto+"&body="+Mensaje;

    mail.href = referencia;
    mail.click();
}


alert("Hola mundo")

let button = document.getElementById("btnenviar");
button.addEventListener("click",enviarMensaje);