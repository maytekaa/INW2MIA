//usuário digitar uma quantidade de vezes que ele quer que a sequência se repita
//mostrar se os números são pares ou ímpares

const leia = require("prompt-sync")()

let limite = parseInt(leia("Digite um número de vezes: "))

for(let x=1; x<=limite; x++){
    if((x%2)==0){
        console.log(x+" - Número Par")
    }
else{
    console.log(x+" - Número Ímpar")
}

}