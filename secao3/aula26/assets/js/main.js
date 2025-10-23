const form = document.querySelector('#form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('Evento previnido')

    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    if(validar(altura, peso)){
        const imc = (peso/(altura**2)).toFixed(2)
        const nivel = nivelIMC(imc)
        msgResultado(`IMC: ${imc} está ${nivel}`)
    }else{
        msgResultado(`Valores inválidos`)
    }
});

function validar(altura, peso){
    let resultado = document.getElementById('resultado')
    if(peso === 0 || altura === 0){
        resultado.style.backgroundColor = 'red';
        return false
    }else{
        resultado.style.backgroundColor = 'green';
        return true
    }
}

function nivelIMC(imc){
    if(imc >= 40) return 'Obesidade grau 3'
    if(imc > 35) return 'Obesidade grau 2'
    if(imc > 30) return 'Obesidade grau 1'
    if(imc > 25) return 'Sobrepeso'
    if(imc > 18.5) return 'Peso normal'
    if(imc <= 18.5) return 'Abaixo do peso'
}

function msgResultado(msg){
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
    const p = document.createElement('p')
    p.innerHTML = msg
    resultado.appendChild(p)
}