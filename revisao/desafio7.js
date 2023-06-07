//cálculo aprovado e reprovado

const leia =  require("prompt-sync")()

let aluno = leia("Digite o nome do aluno: ")

let tipo = leia("Digite A para ALUNA, O para ALUNO e E para ALUNE: ").toUpperCase()

let nota = parseInt(leia("Digite a nota do aluno (1-10): "))

if(tipo=="A"){
    if(nota>=6){
    console.log("Parabéns aluna "+aluno+", você foi aprovada!!")
    } 
    else {
    console.log("Que pena aluna "+aluno+", você foi reprovada!!")
    }
}

if(tipo=="O"){
    if(nota>=6){
    console.log("Parabéns aluno "+aluno+", você foi aprovado!!")
    } 
    else {
    console.log("Que pena aluno "+aluno+", você foi reprovado!!")
    }
}

if(tipo=="E"){
    if(nota>=6){
        console.log("Parabéns alune "+aluno+", você foi aprovade!!")
    } 
    else {
        console.log("Que pena alune "+aluno+", você foi reprovade!!")
    }
}
