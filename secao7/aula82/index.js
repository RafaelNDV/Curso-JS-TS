class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log( this.nome + ' já está ligado')
            return
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log( this.nome + ' já está desligado')
            return
        }
        this.ligado = false
    }
}

// FORMA MAIS SIMPLE DE HERDAR ALGUMA CLASSE
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome) // forma de trazer o construtor da classe mãe (necessário para o constructor do filho funcionar)
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }

    ligar(){
        console.log('Olha, você alterou o método ligar')
    }

    falaOi(){
        console.log('Olá')
    }
}

const d1 = new Smartphone('Samsung', 'Preto', 'S 10')
d1.ligar()
d1.ligar()
d1.desligar()
d1.desligar()
console.log(d1)

const t1 = new Tablet('Ipod', true)
t1.ligar()
t1.falaOi()
console.log(t1)