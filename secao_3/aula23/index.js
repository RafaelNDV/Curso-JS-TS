/**
 * && -> false && true -> false "O valor mesmo"
 * || -> true || false -> vai retornar "o valor verdadeiro"
 * 
 * FALSY *false ( 0, '' "" ``, null/undefined, NaN ) != true
 */



console.log(0 || false || null || 'Luiz Otávio' || true)

const corUsuario = null
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)

// console.log('Luiz' && 0)

// function falaOi(){
//     return 'Oi'
// }
// const vaiExecutar = false

// vaiExecutar && console.log(falaOi())
