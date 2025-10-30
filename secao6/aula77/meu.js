// 705.484.450-52   070.987.720-03
/**
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 10 9  8  7  6  5  4  3  2 (soma tudo)
 * 
 * 11 - (soma tudo % 11) = 5 (primeiro dígite)
 * Se o número for maior que 9, consideramos 0
 * 
 * mesmo coisa que encima, mas começando de 11
 * 
 * 11 - (soma tudo % 11) = 2(segundo dígito)
 * se o número for maior que 9, consideramos 0
 */

const cpf = '705.484.450-52'
const cpfLimpo = cpf.replace(/\D+/g, '')
const cpfArray = Array.from(cpfLimpo)
cpfArray.splice(-2, 2)
let total = cpfArray.reduce(function(acumulador, valor, indice){
    acumulador += Number(valor) * (10 - indice)
    return acumulador
}, 0)
let digito1
let digito2
if(11 - (total % 11) > 9){
    digito1 = 0
}else{
    digito1 = 11 - (total % 11)
}
cpfArray.push(digito1.toString())
const total1 = cpfArray.reduce(function(acumulador, valor, indice){
    acumulador += Number(valor) * (11 - indice)
    return acumulador
}, 0)
if(11 - (total1 % 11) > 9){
    digito2 = 0
}else{
    digito2 = 11 - (total1 % 11)
}
cpfArray.push(digito2.toString())
const teste = cpfArray.join('')
if(teste === cpfLimpo){
    console.log('Cpf validado')
}else{
    console.log('O cpf não é válido')
}

console.log(teste)
console.log(cpf)