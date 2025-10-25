// Declaração de função (Fuction hoisting)
falaOi()

function falaOi(){
    console.log('Oie')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const nome = 'Luiz'
const souUmDado = function(){
    console.log('Sou um dado')
}

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo')
    funcao()
}
executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}

funcaoArrow()

// Dentro de um objeto
const obj = {
    // fala(){
    //     console.log('Estou falando de dentro do obejeto')
    // }
    falar: function (){
        console.log('Estou falando de dentro de um objeto')
    }
}

obj.falar()