//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nomes.splice(índice, delete, elem1, elem2, elem3)

const removidos = nomes.splice(3, 0, 'Luiz', 'Otávio')

console.log(nomes, removidos)