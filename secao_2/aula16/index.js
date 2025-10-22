// O array em js aceitar qualquer tipo de dados juntos, mas não é uma boa prática


const alunos = ['Maria', 'Luiz', 'João']

console.log(alunos)
console.log(alunos.length)
console.log(alunos[2])

console.log(typeof alunos)
console.log(alunos instanceof Array)

//delete alunos[1] // delea o elemento e ele fica vazio(undefined)

//console.log(alunos.slice(0, -1))

//alunos[0] = 'Eduardo'
//alunos[3] = 'Luiza'

// alunos.push('Otávio') // Bota um elemento no final do array, é como alunos[alunos.leght] = 'ad'

// alunos.unshift('Mario') // Bota um elemento no começo do array

// alunos.pop() // remove o elemento no fim do array e retorna o valor removido

// alunos.shift() // remove elementos do começo

console.log(alunos)