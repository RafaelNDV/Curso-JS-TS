/*
function criaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Luiz', 'a', 25)
const pessoa2 = criaPessoa('Maria', 'b', 32)
const pessoa3 = criaPessoa('João', 'c', 55)
const pessoa4 = criaPessoa('Júnior', 'd', 44)
const pessoa5 = criaPessoa('Jean', 'e', 69)

console.log(pessoa1.nome, pessoa2.nome)
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade(){
        this.idade++
        console.log(this.idade)
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.incrementaIdade()