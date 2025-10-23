const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// PONTO IMPORTANTE!! QUANDO FOR WHILE, TER CUIDADO COM 'CONTINUE' PQ ELE PODE FAZER LOOP, É BOM BOTAR O CONTADOR++ ANTES DOS CONTINUES

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        continue // Faz voltar para o começo do laço sem realizar o que está abaixo
    }

    if (numero === 7){ 
        console.log('Número 7 encontrado') 
        break // Sai do laço
    }    

    console.log(numero)
}