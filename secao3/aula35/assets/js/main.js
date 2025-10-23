const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

function adicionarElemento(tag, frase){
    const local = document.querySelector('.container')
    const p = document.createElement(tag)
    p.innerHTML = frase
    local.appendChild(p)
}

// console.log(elementos[0].tag)

for(let i =  0; i < elementos.length; i++){
    // adicionarElemento(elementos[i].tag, elementos[i].texto)
    let {tag , texto} = elementos[i]
    adicionarElemento(tag, texto)
}
