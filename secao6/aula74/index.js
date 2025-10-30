// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.estouAqui = 'HaHaHaHa'
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome
}

//instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = Função construtora)


// pessoa1 --> Pessoa.prototype --> Object.prototype
console.dir(pessoa1)
console.dir(pessoa2)
console.log(pessoa1.estouAqui)
console.log(pessoa2.nomeCompleto())

console.log(Pessoa.prototype)