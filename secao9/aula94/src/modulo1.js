// Posso usar export antes das coisas que ele já exporta tudo

export const nome = 'Luiz'
export const sobrenome = 'Miranda'
export const idade = 30

export function soma(x, y){
    return x + y
}

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    falar(){
        return `Olá eu sou ${this.nome} ${this.sobrenome}`
    }
}

//export {nome, sobrenome as sobrenome2, idade, soma}
//posso usar 'as' pra trocar a variável na exportação também