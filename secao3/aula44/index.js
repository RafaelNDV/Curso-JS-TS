function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números') // eu mesmo posso lançar o error que vai dar
    }
    return x + y
}

try{
    console.log(soma('3', 7))
} catch(err){ // aqui tem meu error, essa variável err aí
    console.log('Alguma coisa mais amigável para o usuário')// aqui é o que eu mando se der error
}

// try{
//     console.log(naoExisto)
// } catch(err){
//     console.log('naoExisto não existe')
//     console.log(err)
// }
