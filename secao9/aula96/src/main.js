import './assets/css/style.css'

const btn = document.querySelector('.btn')
const numero = document.querySelector('.numero')
const addNumeros = document.querySelector('.addNumeros')
const addMaisculas = document.querySelector('.addMaisculas')
const addMinusculas = document.querySelector('.addMinusculas')
const addSimbolos = document.querySelector('.addSimbolos')
const resultado = document.querySelector('.resultado')

function randNumeros(max = 9, min = 0){
    const numero = Math.round(Math.random() * (max - min) + min)
    return numero
}

function randMaiusculas(){
    const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return letras[randNumeros(25, 0)]
}

function randMinusculas(){
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return letras[randNumeros(25, 0)]
}

function randSimbolos(){
    const simbolos = ['|', '"', '!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '_', '-', '+', '=', '[', ']', '^', '{', '}']
    return simbolos[randNumeros(20, 0)]
    
}

function gerarSenha(){
    btn.addEventListener('click', function(){
        const senha = []
        for(let i = 0; i < Number(numero.value); i += 0){
            if(addNumeros.checked && i < Number(numero.value)){
                senha.push(String(randNumeros()))
                i++
            }
            if(addMaisculas.checked && i < Number(numero.value)){
                senha.push(randMaiusculas())
                i++
            }
            if(addMinusculas.checked && i < Number(numero.value)){
                senha.push(randMinusculas())
                i++
            }
            if(addSimbolos.checked && i < Number(numero.value)){
                senha.push(randSimbolos())
                i++
            }
        }
        resultado.innerHTML = ''
        for(let car of senha){
            resultado.innerHTML += car
        }
    })
}

gerarSenha()