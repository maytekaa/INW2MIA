const leia = require("prompt-sync")()

//VETORES 
let matricula = ["M01", "M02", "M03", "M04"]
let nomes = ["Paulo", "Maria", "Pedro", "Marcos"]
let notas = [0,0,0,0]
let indice = -1 //valor 0 o vetor aceita e existe 

//LISTAGEM DE DADOS NA TELA 
console.log("MATRÍCULA\t\tNOMES\t\tNOTAS")

//LAÇO COM TAMANHO DEFINIDO PARA MOSTRAR OS DADOS 
//length define tamanho de dentro do vetor

for(let i = 0; i < matricula.length; i++) {
    console.log(matricula[i]+"\t\t\t"+nomes[i].toUpperCase()+"\t\t"+notas[i])
}

//CADASTRAR NOTA DE UM ALUNO ESPECÍFICO 
let auxMat = leia("Digite a matrÍcula do aluno: ").toUpperCase()

//VERIFICAR SE A MATRÍCULA EXISTE OU NÃO 
for(let i = 0; i < matricula.length; i++){
    if(auxMat == matricula[i]){   //no laço if deve-se usar dois sinais ==
        indice = i 
    }
}

if(indice!= -1){  //!= operador de desigualdade, ou seja se o laço achou alguém diferente de -1, mostra o aluno 
    console.log("O aluno escolhido foi: "+nomes[indice]) 
    //DIGITAR A NOTA DO ALUNO
    notas[indice]=leia("Digite a nota do aluno de 1 a 10: ")

    if(notas[indice]< 6){
        console.log(nomes[indice]+" sua nota é "+notas[indice]+". Você está de recuperação! ")
        console.log(nomes[indice]+" sua nota é "+notas[indice]+". Você está aprovado(a)! ")
    }
}

 


