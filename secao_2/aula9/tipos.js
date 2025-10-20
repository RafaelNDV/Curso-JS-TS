const nome = 'Luiz' // String
const nome1 = "Luiz" // String
const nome2 = `Luiz` // String
const num1 = 10 // Number
const num2 = 10.52 // Number
let nomeAluno; // undefined => não aponta pra local nenhum na memória
let sobrenomeAluno = null // Nulo => não aponta pra local nenhum na memória
const aprovado  = true // Boolean = True, False (lógico)

const a = [1, 2]
const b = a;

console.log(a, b)
b.push(3)
console.log(a, b)

// console.log(typeof aprovado, aprovado)