exports.paginaInicial = (req, res) => {
    console.log('Respondendo o cliente')
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST')
    return
}