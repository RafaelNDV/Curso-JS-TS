document.addEventListener('DOMContentLoaded', function(){
    const data = new Date()
    const diaSemana = data.getDay()
    const dia = zeroAEsquerda(data.getDate())
    const mes = data.getMonth() // 0 a 6
    const ano = data.getFullYear()
    const hora = zeroAEsquerda(data.getHours())
    const minuto = zeroAEsquerda(data.getMinutes())// 0 a 6
    
    const localHora = document.getElementById('h1')
    const diaSemanaTexto = getWeekDay(diaSemana)
    const mesTexto = getMes(mes)
    localHora.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minuto}`

    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`
    }

    function getWeekDay(diaSemana){
        let diaSemanaTexto;
        switch(diaSemana){
            case 0:
                diaSemanaTexto = 'Domingo'
                break
            case 1:
                diaSemanaTexto = 'Segunda-feira'
                break
            case 2:
                diaSemanaTexto = 'Terça-feira'
                break
            case 3:
                diaSemanaTexto = 'Quarta-feira'
                break
            case 4:
                diaSemanaTexto = 'Quinta-feira'
                break
            case 5:
                diaSemanaTexto = 'Sexta-feira'
                break
            case 6:
                diaSemanaTexto = 'Sábado'
                break
            default:
                diaSemanaTexto = 'Deu algum erro'
        }
        return diaSemanaTexto
    }
    function getMes(mes){
        let mesTexto
        switch(mes){
            case 0:
                mesTexto = 'Janeiro'
                break
            case 1:
                mesTexto = 'Fevereiro'
                break
            case 2:
                mesTexto = 'Março'
                break
            case 3:
                mesTexto = 'Abril'
                break
            case 4:
                mesTexto = 'Maio'
                break
            case 5:
                mesTexto = 'Junho'
                break
            case 6:
                mesTexto = 'Julho'
                break
            case 7:
                mesTexto = 'Agosto'
                break
            case 8:
                mesTexto = 'Setembro'
                break
            case 9:
                mesTexto = 'Outubro'
                break
            case 10:
                mesTexto = 'Novembro'
                break
            case 11:
                mesTexto = 'Dezembro'
                break
            default:
                mesTexto = 'Deu algum erro'
                break
        }
        return mesTexto
    }

})