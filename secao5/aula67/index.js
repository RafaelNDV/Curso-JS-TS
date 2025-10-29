// Reduce -> retorna apenas um elemento

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     if(valor % 2 === 0) acumulador.push(valor)
//     return acumulador
// }, [])

// console.log(total)


// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 105},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const velho = pessoas.reduce( function(acumulador, obj){
    if(acumulador.idade > obj.idade) return acumulador
    return obj
})
console.log(velho.nome)