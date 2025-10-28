const recursiva = function(max){
    if(max >= 10000) return
    max++
    console.log(max)
    recursiva(max)
}

recursiva(-3)