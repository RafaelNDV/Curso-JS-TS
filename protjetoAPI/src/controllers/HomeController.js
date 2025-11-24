import Aluno from '../models/Aluno.js'

class homeController{
  async index(req, res){
    res.json('Index')
  }
}

export default new homeController()
