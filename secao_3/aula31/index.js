const verdadeira = true

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

// let nome = 'Luiz' //criando
// var nome2 = 'Luiz' //criando

// if(verdadeira){ 
//     let nome = 'Otávio' // criando
//     var nome2 = 'Ronaldo' // Redeclarando
//     console.log(nome, nome2)
//     if(verdadeira){
//         let nome = 'outra coisa'
//         var nome2 = 'Rina' // Redeclarando
//         console.log(nome, nome2)
//     }
// }



// function falaOI(){
//     console.log('OI')

//     if(verdadeira){
//         let nome = 'Luiz'
//         var sobrenome = 'Miranda'

//         console.log(sobrenome)
//     }
// }
// falaOI()

let sobrenome = 'Miranda' // certo pois tem que ser declarada antes de ser usada
console.log(sobrenome)
var nome = 'rafael' // é içado
