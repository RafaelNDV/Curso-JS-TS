function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave (estoque)
        configurable: false, // pode ou não alterar a chave
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Bad value')
                return
            }
            estoque = valor
        }
    })
}

function criaProduto(nome){
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor
        }
    }
}

// const p1 = new Produto('Camiseta', 20, 3)
// p1.estoque = 'O valor que eu quero'
// console.log(Object.keys(p1))
// console.log(p1.estoque)

const p2 = criaProduto('Vasco')
console.log(p2)