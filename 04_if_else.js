const edad = 17;

if (edad >= 0 && edad < 110) {
  if (edad >= 18) {
    console.log("Eres mayor de edad");
  } else {
    console.log("Eres menor de edad");
  }
} else {
    console.log("Edad invalida");
}

const usuario = "Juan";
const contraseña = "1234";

if (usuario !== "Juan") {
  console.log("Usuario no valido");
} else if (contraseña !== "1234") {
  console.log("Contraseña invalida");
} else {
  console.log("Usuario y contraseña validas");
}

console.log("Fin del programa.");
