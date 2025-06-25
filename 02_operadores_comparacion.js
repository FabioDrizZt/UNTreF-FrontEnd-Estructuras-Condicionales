// operador de igualdad - se desaconseja
console.log(1 == 1); // true
console.log(1 == '1'); // true
console.log(1 == 2); // false

// operador de igualdad estricta - se recomienda
console.log(1 === 1); // true
console.log(1 === '1'); // false
console.log(1 === 2); // false

// operador de diferencia
console.log(1 != 1); // false
console.log(1 != '1'); // false
console.log(1 != 2); // true

// operador de diferencia estricta
console.log(1 !== 1); // false
console.log(1 !== '1'); // true
console.log(1 !== 2); // true

// operador de menor que
console.log(1 < 2); // true
console.log(1 < 1); // false

// operador de menor o igual que
console.log(1 <= 2); // true
console.log(1 <= 1); // true
console.log(1 <= 0); // false

// operador de mayor que
console.log(1 > 2); // false
console.log(1 > 1); // false
console.log(1 > 0); // true

// operador de mayor o igual que
console.log(1 >= 2); // false
console.log(1 >= 1); // true
console.log(1 >= 0); // true

// no hacer esto

// console.log(1 => 2); // error
// console.log(1 =< 2) // error