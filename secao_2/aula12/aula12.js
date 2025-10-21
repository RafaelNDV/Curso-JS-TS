let va = 'A' // B
let vb = 'B' // C
let vc = 'C' // A

let ajuda = va;
va = vb
vb = vc
vc = ajuda

console.log(va, vb, vc)