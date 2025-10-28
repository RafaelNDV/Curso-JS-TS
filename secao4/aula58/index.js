// Função construtora -> objetos
// Função fábrica -> objetos
// Construtora -> Pessoa (new)
// Em funções construtora tem que começar com letra maiscula

function Pessoa(nome, sobrenome){
    
    // Atributos ou métodos privados
    const id = 123456
    const metodoInterno = function(){

    }

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo =  function(){
        console.log(this.nome + ': Sou um método')
    }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Joaquina')

console.log(p1.nome)
console.log(p2.nome)
p2.metodo()