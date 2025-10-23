function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma  instância de date')
    }
    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    })
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora()
    console.log(hora)
}catch(err){
    // Tratar erro
}finally{
    console.log('Tenha um bom dia.')
}



// try{ // É executado quando não há erros
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log(a)
//     console.log('Fechei o arquivo')
// }catch(err){ // É executada quando há erros
//     console.log('Tratando o erro')
// }finally{ // Sempre será executado
//     console.log('Eu senpre sou executado')
// }