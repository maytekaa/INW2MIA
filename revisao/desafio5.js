//cálculo sistema - exercício 4 

const leia = require("prompt-sync")()

let valorA
let valorB
let valorC
let valorR
let valorS

valorA = parseInt(leia("Digite o valor A: "))

valorB = parseInt(leia("Digite o valor B: "))

valorC = parseInt(leia("Digite o valor C: "))

let soma1 = valorA + valorB  

let soma2 = valorB + valorC

valorR = Math.pow(soma1,2)

valorS = Math.pow(soma2,2)

console.log("O valor R é: "+valorR)

console.log("O valor S é: "+valorS)

let valorD = (valorR + valorS)/2

console.log("O valor do sistema D é: "+valorD)

