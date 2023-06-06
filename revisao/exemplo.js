const leia = require("prompt-sync")()  //após instalar npm- lê apenas em texto

let valor1 = 0
let valor2 = 0
let nome = leia("Digite o seu nome: ")

valor1 = parseInt(leia("Digite o valor 1: "))  //parseInt: converte um texto definido pelo prompt-sync para um número inteiro

valor2 = parseInt(leia("Digite o valor 2: "))

console.log("Oi "+nome.toUpperCase()+", a soma dos dois valores é: "+(valor1+valor2))

console.log(nome.length) //quantadidade de caracteres que tem na variavel 

//exercicio 

let celsius = 0 

celsius = parseFloat(leia("Digite a temperatura em graus Celsius: ")) //parseFloat: conerte um texto definido pelo prompt-sync para um número quebrado 

let kelvin = celsius+273

console.log("Oi "+nome+", a temperatura em Kelvin é: "+kelvin)