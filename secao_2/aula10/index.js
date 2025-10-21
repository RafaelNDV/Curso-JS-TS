/**
 * Aritméticos
 * + Adição / Concatenação
 * -(subtração) /(divisão) *(multiplicação) **(potenciação)
 * % Resto da divisão
 * 
 * Precedência[() ** * / % + -]
 * 
 * NaN - Not a number
 * 
 * parseInt(x) transformar em número inteiro
 * parseFloat(x) transformar o número em casa decimal
 * Number(x) ele dá uma jeitoe descobre
 */
const num1 = 5
const num2 = 2
const num3 = 10
console.log(num1 % num2)

let contador = 1
contador++ // contador = contador + 1
contador-- // contador = contador - 1
contador += 3 //contador = contador + 3 (-= *= /= **=)
console.log(++contador) // adiciona e mostra
console.log(contador++) // mostra e depois adiciona
console.log(contador)