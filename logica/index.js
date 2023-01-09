const enviarMensaje = () => {
  console.log();

  let mail = document.createElement("a");
  let asunto = document.getElementById("asunto").value;
  let Mensaje = document.getElementById("cuerpo").value;

  asunto = asunto.replace(/ /gi, "%20");
  Mensaje = Mensaje.replace(/ /gi, "%20");

  referencia =
    "mailto:miguelcalderon.dev@gmail.com?subject=" +
    asunto +
    "&body=" +
    Mensaje;
  mail.href = referencia;
  mail.click();
};

const alerta = () =>{

  //divMenuResponsivo
  let divMenuResponsivo = document.getElementById("divMenuResponsivo");
  alert("Sale menu");  
};

let button = document.getElementById("btnenviar");
button.addEventListener("click", enviarMensaje);

//let botonHamburguesa = document.getElementById("btnHamb");
//botonHamburguesa.addEventListener("click", alerta);

/*
let botonOpcion = document.getElementsByClassName("opcion");
botonOpcion.addEventListener("click", alerta);
*/