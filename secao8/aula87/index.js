function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('CAI NO ERROR') 
            return
        }
        
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promisse')
        }, tempo)
    })
    
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
//    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
//    esperaAi(1000, 1000),
 //   `Outro valor`
]

// EXECUTA TUDO QUE ESTÁ DENTRO DO ARRAY
// Promise.all(promises).then(function(valor){
//     console.log(valor)
// }).catch(e => {
//     console.log(e)
// })

// EXECUTA A PROMISE QUE RESPONDER MAIS RÁPIDO, OU O QUE TIVER DENTRO DO ARRAY QUE RESPONDE MAIS RÁPIDO
Promise.race(promises).then(function(valor){
    console.log(valor)
}).catch(e => {
    console.log(e)
})

function baixaPagina(){
    const emCache = false

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina)
}).catch(e => console.log(e))