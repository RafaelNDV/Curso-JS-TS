import Aluno from '../models/Aluno.js'

class homeController{
  async index(req, res){
    const novoAluno = await Aluno.create({
      nome: 'Vasco',
      sobrenome: 'Miranda',
      email: 'maria@gmail.com',
      idade: 23,
      peso: 57,
      altura: 1.7
    })
    res.json(novoAluno)
  }
}

export default new homeController()
