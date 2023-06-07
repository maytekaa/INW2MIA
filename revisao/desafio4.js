//cálculo potencia 

const leia = require("prompt-sync")()

let numero 

numero = parseInt(leia("Digite um número: "))

console.log("O resultado de "+numero+" ao cubo é: "+(Math.pow(numero,3)))

