// Map (altera o valor) -> Sempre retorna um array, com a mesma quantidade de elementos do array original.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const dobro = numeros.map(valor => valor * 2)
console.log(dobro)



const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]
const nomes = pessoas.map(obj => obj.nome)
const idades = pessoas.map( obj => ({ idade: obj.idade}))
const comIds = pessoas.map(function(obj, indice){
    obj.id =  indice
    return obj
})
console.log(nomes)
console.log(idades)
console.log(comIds)

