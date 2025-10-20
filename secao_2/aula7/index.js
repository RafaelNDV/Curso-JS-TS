// Não podemos criar constantes com palavras reservadas. (let let)
// constantes precisam ter nome significativos
// Não podemos começar o nome de uma constante com um número (let 1nome)
// Não podem conter espaços ou traços (let nome cliente ou nome-cliente)
// Utilizamos camelCase
// Case-sensitive
// NÂO PODEMOS ALTERAR O VALOR DE UMA CONSTANTE
// NÃO ULTILIZE VAR, ULTILIZE CONST.

const nome = 'João'
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
console.log(resultadoTriplicado)

console.log(typeof(primeiroNumero))