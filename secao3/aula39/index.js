function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = random(1, 50);
console.log(rand)

// Checa se é verdadeiro depois faz
while (rand !== 10){
    rand = random(1, 50)
    console.log(rand)
}

// Faz depois checa se é verdadeiro
do{
    rand = random(1, 50)
    console.log(rand)
}while(rand !== 10)



// USADO COMO FOR
// const nome = 'Rafael'
// let i = 0
// while (i < nome.length){
//     console.log(nome[i])
//     i++
// }