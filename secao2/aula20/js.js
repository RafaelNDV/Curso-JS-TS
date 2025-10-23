const meuArray = []
function criarPessoa(nome, sobrenome, peso, altura){
    return {nome, sobrenome, peso, altura}
}
function enviar(){
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const mostra = document.getElementById('mostra')
    meuArray.push(criarPessoa(nome, sobrenome, peso, altura))
    mostra.innerHTML += `<p>${meuArray[meuArray.length -1].nome} ${meuArray[meuArray.length -1].sobrenome} ${meuArray[meuArray.length -1].peso} ${meuArray[meuArray.length -1].altura}</p>`
    console.log(meuArray)
}