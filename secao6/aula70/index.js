// CRIANDO OBJETO DE FORMA LITERAL (COM AS CHAVES{})
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio'
// }
// console.log(pessoa['nome'])
// console.log(pessoa.sobrenome)

// CRIANDO OBJETO COM MÉTODO CONSTRUTOR
// const pessoa1 =  new Object()
// pessoa1.nome = 'Luiz'
// pessoa1.sobrenome = 'Otávio'
// pessoa1.idade = 22
// pessoa1.falarNome = function(){
//     return `${this.nome} está falando seu nome.`
// }
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// for (let chaves in pessoa1){
//     console.log(chaves)
// }


// FACTORY FUNCTIONS
// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// CONSTRUCTION FUNCTIONS
// {} <-  this -> this
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa('Luiz', 'Miranda')
Object.freeze(p1) // Isso trava o objeto, não deixa eu mudar ele
console.log(p1)
