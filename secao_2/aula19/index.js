/**
 * Primitivos(imutáveis) - string, number, boolean, undefined, null (bignit, symbol) - Valores copiados
 * 
 * Referência(mutável) - array, object, function - Passados por referência, apontam para o mesmo lugar da memória
 * 
 */

let m = 1
let n = m
console.log(m, n)

m = 8               // Mudança nos primiticos
console.log(m, n)

let a = [1, 2, 3]
let b = a
let c = b
let d = [...a] // Forma de fazer cópia ao invés de referência
console.log(a, b, c, d)

a.push(4)           // Mudança nos de referência
console.log(a, b, c, d)

// Também acontece pra objeto, no caso a referência

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const n1 = pessoa
pessoa.nome = 'João'
console.log(n1)