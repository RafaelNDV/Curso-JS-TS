// Os paramentros ficam guardados em uma variável chamada de arguments e isso é uma array[Isso tudo se a funçao for criado usando a palavra "function"]
function  funcao(){
    let total = 0
    for (let valor of arguments){
        total += valor
    }
    console.log(total)
}
funcao(1,2,4,5,6,7,8)

function funcao1(a, b = 2, c = 4){
    console.log(a + b + c)
}
funcao1(2, undefined, 20)

function funcao2({ nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
funcao2({nome: 'Luiz', sobrenome: 'Otávio', idade: 20})

const conta = function (operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
        
    }
    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)