//digitaçao dos valores 
//soma dos valores

const leia = require("prompt-sync")()  //após instalar npm - lê apenas em texto

let valor1 = 0
let valor2 = 0
let nome = leia("Digite o seu nome: ")

valor1 = parseInt(leia("Digite o valor 1: "))  //parseInt: converte um texto definido pelo prompt-sync para um número inteiro

valor2 = parseInt(leia("Digite o valor 2: "))

console.log("Oi "+nome.toUpperCase()+", a soma dos dois valores é: "+(valor1+valor2))

console.log(nome.length) //quantadidade de caracteres que tem na variavel 
