const falar = {
    falar(){
        console.log(`${this.nome} está falando`)
    }    
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }    
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`)
    }    
}

const pessoaPrototype = {...falar, ...comer, ...beber}

function criaPessoa(nome, sobrenome){
    // const pessoaPrototype = {
    //     falar(){
    //         console.log(`${this.nome} está falando`)
    //     },
    //     comer(){
    //         console.log(`${this.nome} está comendo`)
    //     },
    //     beber(){
    //         console.log(`${this.nome} está bebendo`)
    // }
    // }
    return Object.create(pessoaPrototype, {
        nome: {value: nome, enumerable:true },
        sobrenome: {value:  sobrenome, enumerable:true}
    })
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = criaPessoa('Maria', 'A')
console.log(p1)
p1.falar()
p2.beber()