const edad = 18;

/* edad >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");
 */

/* const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje) */

console.log(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

// console.log(`Eres ${edad >= 18 ? "mayor" : "menor"} de edad`);

edad >= 0 && edad < 110
  ? edad >= 18
    ? console.log("Eres mayor de edad")
    : console.log("Eres menor de edad")
  : console.log("Edad invalida");
