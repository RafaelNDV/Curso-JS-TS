const nome =  'Luiz Otávio'
const nomes = ['Luiz', 'Henrique', 'Rafael']

//for of já pega os valores que estão na posição do array (Não funciona com Objeto só com [interáveis, arrays ou strings])
for (let valor of nome){
    console.log(valor)
}

// Essa só funciona em Arrays
nomes.forEach(function(valor, indice){ 
    console.log(valor, indice)
})

/*
// for padrão - Geralmente com interáveis (array ou string)
for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}

// for in -  Retorna o índice ou chave (string, array ou objetos)
for (let i in nome){
    console.log(nome[i])
}
*/