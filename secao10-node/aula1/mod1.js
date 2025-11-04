// const nome = 'Luiz'
// const sobrenome = 'Miranda'

// const falaNome = () => nome + ' ' + sobrenome


// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome =falaNome



class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

module.exports.nome = 'Luiz' // EXPORTANDO ALGO QUE NEM TEM (PODE)
// exports.Pessoa = Pessoa

module.exports = { nome, sobrenome, Pessoa}