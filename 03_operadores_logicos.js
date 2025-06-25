// Operador AND - Y - Conjunción --> && 
// Devuelve verdadero si ambos operandos son verdaderos
// Se deben cumplir todos los requisitos
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// logica binaria 
// 1: verdadero
// 0: falso

// multiplicación
// 1*1 = 1
// 1*0 = 0
// 0*1 = 0
// 0*0 = 0

// operador OR - O - Disjunción --> ||
// Devuelve verdadero si al menos uno de los operandos es verdadero
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// suma
// 1+1 = 1
// 1+0 = 1
// 0+1 = 1
// 0+0 = 0
const edad = 550;
const esMayorDeEdad = edad > 18;
const estaAcompañado = true
console.log(esMayorDeEdad || estaAcompañado)

// Operador NOT - No - Negación --> !
// Devuelve verdadero si el operando es falso
// Devuelve falso si el operando es verdadero
console.log(!esMayorDeEdad); // false
console.log(!true); // false
console.log(!false); // true

// Los operadores se utilizan en combinación
// validar la edad de una persona registrada en nuestro sitio
console.log(edad >= 18 && edad < 110) // edad valida
console.log(edad < 18 || edad >= 110) // edad invalida
console.log(!(edad >= 18 && edad < 110)) // edad invalida