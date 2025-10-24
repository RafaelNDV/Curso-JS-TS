const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let data = new Date(10800000)
let timer = null;

function iniciarContador(){
    if (timer) return
    timer = setInterval(function(){
        data.setTime(data.getTime() + 1000)
        relogio.innerHTML = data.toLocaleTimeString()
    },1000)
    relogio.style.color = 'black'
}
function pausarContador(){
    clearInterval(timer)
    timer = null
    relogio.style.color = 'red'
}
function zerarContador(){
    clearInterval(timer)
    data = new Date(10800000)
    relogio.innerHTML = data.toLocaleTimeString()
    timer = null
    relogio.style.color = 'black'
}

iniciar.addEventListener('click', function(event){
    iniciarContador()
})
pausar.addEventListener('click', function(event){
    pausarContador()
})
zerar.addEventListener('click', function(event){
    zerarContador()
})