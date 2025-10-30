// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave (estoque)
        value: estoque, // mostra o valor (20)
        writable: false,    // pode ou não alterar o valor
        configurable: false // pode ou não alterar a chave
    })

    Object.defineProperties(this, {
    nome: {
        enumerable: true, // mostra a chave (estoque)
        value: nome, // mostra o valor (20)
        writable: false,    // pode ou não alterar o valor
        configurable: false // pode ou não alterar a chave
    },
    preco: {
        enumerable: true, // mostra a chave (estoque)
        value: preco, // mostra o valor (20)
        writable: false,    // pode ou não alterar o valor
        configurable: false // pode ou não alterar a chave
    }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))