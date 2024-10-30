const prompt = require("prompt-sync")({ sigint: true });
/*---Este es el TP 11 del bootcamp de Fundación Formar ---*/

console.log("* * *Bienvenido al sistema de gestión de permisos de usuario* * *")
let perfil=prompt(console.log("indique su perfil de usuario:  "));

switch (perfil.toLowerCase()) {
  case "administrador":
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
case "asistente":
  console.log("Usted sólo tiene permisos de registrar,modificar y consultar datos");
  break;
    break;
  case "invitado":
    console.log("Usted sólo tiene permisos de consultar datos")
  case " ":
    console.log("Debe especificar el perfil del usuario");
    break;
  default:console.log("Debe especificar un perfil válido");
    break;
}
