// IEEE 754-2008

let num1 = 0.7// 0.7 + 0.1 = 0.7999999 Pra salvar tenho que transformar o resultado com Number()
let num2 = 0.1

num1 += num2
num1 += num2
num1 += num2

num1 = Number(num1.toFixed(2))

console.log(num1)

// console.log(num1.toString() + num2) // só muda nesse momento 
// num1 = num1.toString() // Aqui realmente transforma o tipo
// console.log(num1.toString(2)) // Faz a representação binária de um número
// console.log(num1.toFixed(2)) // Corta os número depois do ponto exemplo 10.41234 -> 10.41
// console.log(Number.isInteger(num1)) // boolean que retorna se é número inteiro

//let temp = num1 * 'Ola'
//console.log(Number.isNaN(temp)) // Retorna True se a conta for NanN(inválida)