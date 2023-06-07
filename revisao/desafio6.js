//cálculo pontos, distância e raiz 

const leia = require("prompt-sync")()

//pontos P/P2

let x1 = parseInt(leia("Digite o valor de x do ponto P: "))

let y1 = parseInt(leia("Digite o valor de y do ponto P: "))

let x2 = parseInt(leia("Digite o valor de x do ponto P2: "))

let y2 = parseInt(leia("Digite o valor de y do ponto P2: "))

console.log("Os pontos de P são: "+x1+","+y1)

console.log("Os pontos de P2 são: "+x2+","+y2)

//cálculo da distância 

let sub1 = x2 - x1
let sub2 = y2 - y1

let D = Math.sqrt(Math.pow(sub1, 2)+Math.pow(sub2, 2)) 

console.log("A distância dos pontos P e P2 é: "+D)

