/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 * 
 *  if pode ser usado sozinho
 *  Sempre que ultilizo a palavra else, preciso de um if antes
 *  Eu posso ter vários else ifs na checagem
 *  Só posso ter um else na checagem
 *  Podemos usar condições sem usar else if, utilizando apenas if e else
 */

let horaAgora = new Date().getHours()
let minutosAgora = new Date().getMinutes()
let segundosAgora = new Date().getSeconds()

console.log(`${horaAgora}:${minutosAgora}:${segundosAgora}`)

if ( horaAgora < 12 && horaAgora >= 0 ){
    console.log('Bom dia!')
}else if(horaAgora < 18){
    console.log('Boa tarde')
}else if(horaAgora < 23){
    console.log('Boa noite')
}else{
    console.log('Deu errado alguma coisa meu fi')
}

const tenhoGrana = true
if(tenhoGrana){
    console.log('Vou sair de casa')
}else{
    console.log('Não vou sair de casa')
}