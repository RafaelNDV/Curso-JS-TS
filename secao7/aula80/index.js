class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    // Todos os métodos criados dentro de uma classe já vão para o seu prototype
    falar(){
        console.log(`${this.nome} está falando`)
    }

    comer(){
        console.log(`${this.nome} está comendo`)
    }

    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

const p1  = new Pessoa('Rafael', 'Nestor')
const p2  = new Pessoa('Luiz', 'Nestor')
const p3  = new Pessoa('João', 'Nestor')
const p4  = new Pessoa('Rafaela', 'Nestor')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
p1.falar()
p3.falar()
p2.comer()
p4.beber()
