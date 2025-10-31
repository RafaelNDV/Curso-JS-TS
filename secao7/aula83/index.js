class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    // Método de instância
    aumentarVolume(){
        this.volume += 2
    }
    diminuirVolume(){
        this.volume -= 2
    }

    // Método de estático [É como se fosse só uma fução que está dentro da classe e é chamada por ela, mas não tem os argumentos e váriáveis]
    static trocaPilha(){
        console.log('Ok, vou trocar')
    }
}
// Para chamar esse método estático, tem que ser pela classe
ControleRemoto.trocaPilha()


const controle1 = new ControleRemoto('Samsung')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)