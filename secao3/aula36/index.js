// for in lê chacves de um obejto também
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

for (let i in pessoa){
    console.log(i) // retorna as chaves
    console.log(pessoa[i])  // retorna os valores que estão nas chaves
}


// const frutas = ['Pera', 'Maçã', 'Uva']

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }

// // Posso fazer for in em arrays, e ele me retorna o índice
// for (let i in frutas){
//     console.log(frutas[i])
// }