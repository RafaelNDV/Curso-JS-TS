const enviar = document.querySelector('.enviar')
const lista = document.querySelector('.lista')
let btnApaga;
let i = 0

function adicionarLista(tarefa){
    let li = document.createElement('li')
    li.classList.add('li' + i)
    lista.appendChild(li)
    
    let linha = document.createElement('p')
    linha.classList.add('linha' + i)
    li.appendChild(linha)


    let criado = document.createElement('strong')
    criado.classList.add('tarefa' + i)
    criado.innerHTML = `${tarefa} - `
    
    let botao = document.createElement('button')
    botao.innerHTML = 'Apagar'
    botao.classList.add('apaga')
    botao.id = 'apaga' + i

    linha.appendChild(criado)
    linha.appendChild(botao)

    i++

}

function apagarTarefa(){

}

enviar.addEventListener('click', function(e){
    let tarefa = document.querySelector('.tarefa')
    adicionarLista(tarefa.value)
    tarefa.value = ''
})

document.addEventListener('click', function(e){
    const el = e.target
    if(el && el.classList.contains('apaga')){
            const indice = el.id.replace('apaga', '')
            const apagado = document.querySelector('.li' + indice)
            apagado.remove()
        }
})