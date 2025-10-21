/**
 * ( \ ) faz desaparecer um símbolo do texto, ou me libera as aspas, e se eu quiser botar ela,tem que ter duas
 * 
 * Strings são indexadas [0][1][2][3][4]
 */

let s = "Um texto"
console.log(s)
console.log(s[0]) // Retorna a caracter na posição indicada
console.log(s.charAt(6)) // Faz a mesma coisa
console.log(s.concat(' ', 'em', ' ', 'um'))
console.log(s.indexOf('texto', 0)) // Retorna aonde cemeça tal texto (se n tiver retorna -1) [a posicação do 0 quer dizer de onde ele ele começa a procura]
console.log(s.lastIndexOf('o', 3)) // Mesmo do outro mas ele começa do final
console.log(s.replace('Um', 'Outra')) // Troca o texto por outro
console.log(s.length) // Retorna o tamanho da string
console.log(s.slice(4, 8)) // Retorna um pedaço cortado da String
console.log(s.split(' ', 1)) // Retorna um array dividido pelo caractere escolhido [O numero é quantos vezes vai ser dividio por esse caracter]
console.log(s.toUpperCase()) // Deixa a string toda maiuscula
console.log(s.toLowerCase()) // Deixa a string toda minuscula