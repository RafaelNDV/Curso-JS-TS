class homeController{
  index(req, res){
    res.json({
      tudoCerto: true,
    })
  }
}

export default new homeController()
