const prompt = require("prompt-sync")({ sigint: true });
/*---Este es el TP 11 del bootcamp de Fundación Formar ---*/



let perfil = {
  Pepa: "Administrador",
  Pepe: "Asistente",
};
console.log("***Bienvenido al sistema de gestión***");
perfil = prompt(
  "Los usuarios habilitados del sistema son Pepa y Pepe. Por favor escriba su nombre  "
);

switch (perfil) {
  case "Pepa":
    console.log("Usuario identificado, Bienvenida Pepa, eres la Administradora");
    break;
  case "Pepe":
    console.log("Usuario identificado, Bienvenido Pepe, tienes los permisos de Usuario del sistema");
    break;
   default:
    console.log("Bienvenido al sistema, usted no se encuentra registrado, su perfil será de 'invitado'")
    break;
}
