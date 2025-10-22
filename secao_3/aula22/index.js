/**
 * Operadores Lógicos
 * &&  -> AND -> E (Todas expressões precisam ser verdadeiras)
 * || -> OR -> OU (Pelo menos uma expressão verdadeira para retornar verdadeiro)
 * ! -> NOT -> NÃO
 * 
 */

const expressaoAND = true && true
const expressaoOR = false || true
console.log(expressaoOR)

const usuario = 'Luiz'
const senha = '123456'

const vaiLogar = usuario === 'Luiz' && senha === '12356'
console.log(vaiLogar)

console.log(!true)
