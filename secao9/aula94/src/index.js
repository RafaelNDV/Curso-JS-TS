import {nome as nome2, sobrenome, idade, soma, Pessoa} from './modulo1'
// usando o 'as' para renomear a variável nesse módulo

// import * as MeuModulo from './modulo1'
// FORMA DE IMPORTAR TUDO QUE TEM EXPORTADO DO OUTRO MÓDULO

console.log(nome2, sobrenome, idade, soma(8, 10))

const p1 = new Pessoa('Rafael', 'Nestor')
console.log(p1.falar())