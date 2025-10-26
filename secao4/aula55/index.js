// IIFE -> Immediately invoked function expression
// É como uma função anonima para poder proteger do escopo global, é só usar esses parênteses
(function(idade, peso, altura){
    const nome = 'Luiz'
    console.log(2134324)
    console.log(nome)

    console.log(idade, peso, altura)
})(30, 80, 1.8)