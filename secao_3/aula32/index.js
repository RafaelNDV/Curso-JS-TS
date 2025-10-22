// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//const [um, dois, tres, ...resto] = numeros; // ... rest, ... spread
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);


const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [lista1, lista2, lista3] = numero
console.log(lista3[1])