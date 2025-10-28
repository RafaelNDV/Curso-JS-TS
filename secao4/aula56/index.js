// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(this.nomeCompleto)
        },

        fala: function(assunto){
            return `${nome} está falando sobre ${assunto}`
        },

        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80)
console.log(p1.imc())
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Maria Leandra Albuquerque'
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42)
console.log(p2.fala('Vasco'))