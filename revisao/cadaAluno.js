//alunos sem ser vetorial 

const leia = require('prompt-sync')()

let aluno1
let aluno2 
let nota1
let nota2

aluno1 = leia("Nome do aluno 1: ")
nota1 = parseInt(leia("Nota do aluno 2: "))

aluno2 = leia("Nome do aluno 2: ")
nota2 = parseInt(leia("Nota do aluno 2: "))

if(nota1>=5){
    console.log("Oi, "+aluno1+". Aprovado ")
}

else{
    console.log("Oi, "+aluno1+". Recuperação ")
}

if(nota2>=5){
    console.log("Oi, "+aluno2+". Aprovado ")
}

else{
    console.log("Oi, "+aluno2+". Recuperação ")
}