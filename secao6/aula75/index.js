// // new Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// }

// const objB = {
//     chaveB: 'B'
//     // __proto__: ObjA
// }

// const objC = new Object()
// objC.chaveC = 'C'

// // fazendo o objA ser o prototype do objB (Assim fazendo uma cadeia)
// Object.setPrototypeOf(objB, objA)
// // fazendo o objB ser o prototype do objC (continuando a cadeia)
// Object.setPrototypeOf(objC, objB)
// console.log(Object.getPrototypeOf(objC))
// console.log(objC.chaveA)

function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(porcetagem){
    this.preco = this.preco - (this.preco * (porcetagem/100))
}
Produto.prototype.aumento = function(porcetagem){
    this.preco = this.preco + (this.preco * (porcetagem/100))
}

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype) // fazendo ter o prototype de Produto

const p3 = Object.create(Produto.prototype, {
    nome: {
        enumerable: true,
        value: 'Vasco',
        writable: true
    },
    preco: {
        enumerable: true,
        value: 50,
        writable: true
    }
})

const p1 = new Produto('Camiseta', 50)

p1.desconto(10)
p1.aumento(50)
console.log(p1)

p2.desconto(5)
console.log(p2)

p3.aumento(100)
console.log(p3)