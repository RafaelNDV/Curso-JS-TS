// return retorna um valor e termina a função
function soma(a, b){
    return a + b
}
console.log(soma(8,9))

function criaPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')

console.log(p1)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto   
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('Mundo'))

function criaMultiplicador(multiplicador){
    function multiplicacao(n){
        return n * multiplicador
    }
    return multiplicacao
}