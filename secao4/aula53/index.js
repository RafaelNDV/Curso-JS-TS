// A função mais de dentro tem acesso a todos os escopos para fora
function retornaFuncao(nome){
    return function(){
        return nome
    }
}

const funcao = retornaFuncao('Luiz')
const funcao2 =  retornaFuncao('João')
console.log(funcao2())
console.log(funcao())

// closere é meio que quando eu defino o escopo da minha função