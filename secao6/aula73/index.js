// Object.assign(des, any)
// Object.getOwnPropertyDescriptor(o, 'prop')
// ... (spread)

// Já vimos
// Object.keys (retorna as chaves)
// Object.freeze (congela o objeto)
// Object.defineProperties (define várias propriedades)
// Object.defineProperty (define uma propriedade)

const produto = {nome: 'produto', preco: 1.8}
//const caneca = {...produto, material: 'porcelana'}
//const caneca = Object.assign({}, produto, {material: 'porcelana'})

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa',
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values(produto))
console.log(Object.entries(produto))