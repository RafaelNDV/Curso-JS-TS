const inputTarefa = document.querySelector('.tarefa')
const enviar = document.querySelector('.enviar')
const lista = document.querySelector('.lista')

adicionarSave()

function adicionarLista(tarefa){
    if(!tarefa) return
    const li = document.createElement('li')
    li.innerText = `${tarefa} `
    lista.appendChild(li)
    adicionarBotao(li)
    salvar()
}

function adicionarBotao(li){
    const botao = document.createElement('button')
    botao.classList.add('apaga')
    botao.innerText = 'Apagar'
    li.appendChild(botao)
}

function limparInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function salvar(){
    const liTarefas = lista.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace(' Apagar', '')
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJASON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJASON)
}

function adicionarSave(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){
        adicionarLista(tarefa)
    }
}


document.addEventListener('click', function(e){
    const el =  e.target
    if(el.classList.contains('apaga')){
        el.parentElement.remove()
    }
    salvar()
})

document.addEventListener('keypress', function(e){
    if(e.key === "Enter"){
        adicionarLista(inputTarefa.value)
        limparInput()
    }
})

enviar.addEventListener('click', function(){
    adicionarLista(inputTarefa.value)
    limparInput()
})