const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}


const {nome: teste, sobrenome, idade, endereco: {rua, numero}} = pessoa // Atribuição via desestruturação
console.log(teste, sobrenome, idade, rua, numero)