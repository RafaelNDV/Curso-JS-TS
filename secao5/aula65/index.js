// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callbackFilter(valor){
//     return valor > 10
// }

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array)
//     return valor > 10
// })
// console.log(numerosFiltrados)


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const l5 = pessoas.filter( valor => valor.nome.length >= 5)
const velhos = pessoas.filter( obj => obj.idade > 50)
const a = pessoas.filter( obj => obj.nome[obj.nome.length - 1].toLocaleLowerCase() === 'a')
console.log(a)
console.log(velhos) 
for (let i of l5){
    console.log(i.nome)
}
