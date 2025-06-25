let numero = 5;

// 0,1,2,3,4
// calificacion: desaprobado
// 5,6
// calificacion: aprobado
// 7,8,9
// calificacion: promocionado
// 10
// calificacion: Excelente

/* if (numero === 1) {
  console.log("Uno");
} else if (numero === 2) {
  console.log("Dos");
} else if (numero === 3) {
  console.log("Tres");
} else if (numero === 4) {
  console.log("Cuatro");
} else if (numero === 5) {
  console.log("Cinco");
} else {
  console.log("Numero invalido");
} */

switch (numero) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Calificacion: desaprobado");
    break;
  case 5:
  case 6:
    console.log("Calificacion: aprobado");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Calificacion: promocionado");
    break;
  case 10:
    console.log("Calificacion: Excelente");
    break;
  default:
    console.log("Nota invalida");
    break;
}

/* Menu de opciones */
console.log("--- Menu de opciones ---");
console.log("1. Calcular nota");
console.log("2. Calcular calificacion");
console.log("3. Calcular promedio");
console.log("4. Calcular Nota Mas Alta");
console.log("5. Calcular Nota Mas Baja");
console.log("0. Salir");
const opcion = "2"; // prompt("¿Qué opción desea seleccionar?");
switch (opcion) {
  case "1":
    console.log("Calcular nota");
    break;
  case "2":
    console.log("Calcular calificacion");
    break;
  case "3":
    console.log("Calcular promedio");
    break;
  case "4":
    console.log("Calcular Nota Mas Alta");
    break;
  case "5":
    console.log("Calcular Nota Mas Baja");
    break;
  case "0":
    console.log("Salir");
    break;
  default:
    console.log("Opción invalida");
    break;
}

/* tambien permite usar rangos */
numero = 50;
if (numero < 0) {
  console.log("nota invalido");
} else {
  switch (true) {
    case numero < 5.5:
      console.log("Calificacion: desaprobado");
      break;
    case numero < 6.5:
      console.log("Calificacion: aprobado");
      break;
    case numero < 9.5:
      console.log("Calificacion: promocionado");
      break;
    case numero == 10:
      console.log("Calificacion: Excelente");
      break;
    default:
      console.log("Nota debe ser menor que 10");
  }
}
