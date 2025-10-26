function gerarSegundos(){
    const segundos = Math.round(Math.random() * (3000 - 500)) + 500
    return segundos
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if (callback) callback()
    }, gerarSegundos())    
}
function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    }, gerarSegundos())    
}
function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if (callback) callback()
    }, gerarSegundos())    
}


f1(function(){
    f2(function(){
        f3(function(){
            console.log('Olá Mundo!')
        })
    })
})
