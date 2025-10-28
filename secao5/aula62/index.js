// Isso funciona para Strings, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana') // [Outra forma de criar que no caso é com o construtor]
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
// const novo = nomes // Referência
// const novo = [...nomes] // Cópia
const novo = nomes.slice(1, 3) // cortar um pedaço do array
console.log(novo)
console.log(nomes.length) // retorna o tamanho
nomes[2] = 'João' // troca o valor do indice
const removido = nomes.pop() // tira do final
const removido1 = nomes.shift() // tira do começo
nomes.unshift('Talles') // Adiciona no começo
nomes.push('Rafael')   // Adiciona no final
delete nomes[0] // deleta e deixa o espaço vazio
console.log(nomes)
console.log(removido)
console.log(removido1)


// convertendo String num array

let nome = 'Luiz Otávio Miranda'
const nomez = nome.split(' ') // corta a string com um valor específico, transformando em array
const nomez1 = [ 'Luiz', 'Otávio', 'Miranda' ]
let nome1 = nomez1.join(' ')
console.log(nome1)
console.log(nomez)