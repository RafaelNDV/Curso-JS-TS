const nome = 'Rafael Nestor'
const sobrenome = 'Duarte Vasconcelos'
const idade = 21
const peso = 67 // Em kilos
const alturaEmM = 1.80 // Em metros
let imc = peso / alturaEmM**2
let anoAtual = new Date().getFullYear()
let anoNascimento = anoAtual - idade;

// tamplete strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kgs`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)