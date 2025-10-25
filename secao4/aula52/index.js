// quando se executa uma função ela lembra de onde ela foi declara de meio que executa como se ela tivesse lá, considerando seu vizinhos para pegar sua variáveis ou não

const nome = 'Luiz'
function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Otávio'
    falaNome()
}
usaFalaNome()