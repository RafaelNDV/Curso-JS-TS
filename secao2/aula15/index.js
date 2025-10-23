let num1 = 9.54578
// let num2 = Math.floor(num1) // Arredondando para baixo
// let num2 = Math.ceil(num1) // Arredonda para cima
// let num2 = Math.round(num1) // Arredonda para o valor mais próximo
// console.log(num2)

console.log(Math.max(1,2,3,4,5,6,7,-10,-50,1500,9,8)) // Pega maior número da sequência
console.log(Math.min(1,2,3,4,5,6,7,-10,-50,1500,9,8)) // Pega o menor número da sequência

const aleatorio = Math.round(Math.random() * (20 - 8) + 8) // forma de botar máximo e minimo além de arredondar
console.log(aleatorio)
console.log(Math.random(aleatorio)) // Gera um número aleatório entre 0 e 1
console.log(Math.PI) // Valor de Pi
console.log(100 / 0) // Retorna Infinity e ainda é TRUE
