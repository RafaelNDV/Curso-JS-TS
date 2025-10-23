/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorne o próorio número
 * Checar se o número é realmente um número = Retorna o próprio número
 * Use a função com número de 0 a 100
 */

function fizzBuzz(num){
    if( typeof num !== 'number'){
        return 'Escreve um número fi'
    }else if(num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    }else if(num % 3 === 0){
        return 'Fizz'
    }else if(num % 5 === 0){
        return 'Buzz'
    }else{
        return num
    }
}

for(let i = 1; i <= 100; i++){
    console.log(fizzBuzz(i))
}
