const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) // forma de pegar o estilo de algum lugar
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}