const express = require('express')
const app = express()

// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Olá mundo!!!</button>
        </form>
        `)
})

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params.idUsuarios)
    res.send(req.params)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})