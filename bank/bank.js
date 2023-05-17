//aula 17/05: programa 1 (EXEMPLO: conta)

//CLASSES: 

class Conta{
    constructor(numero, cpf, saldo, ativo){
        this.numero = numero,
        this.cpf = cpf,
        this.saldo = saldo,
        this.ativo = ativo;
    }

    //METODOS: 
    ativar(){
        this.ativo = true
    }

    credito(valor){      //(valor): mostra que a variavel/atributo vem junto com o metodo
       if(this.ativo){
        if(valor<0){
            console.log("Impossível realizar valor negativo...")
        }

        else if(valor == 0){
            console.log("Impossível realizar valor zerado...")
        }

        else{
            this.saldo = this.saldo + valor
         }
       }
        
       else{
        console.log("Conta está inativa...")
       }
    }

    debito(valor){      
        if(this.ativo){
         if(valor<0){
             console.log("Impossível realizar valor negativo...")
         }
 
         else if(valor == 0){
             console.log("Impossível realizar valor zerado...")
         }

         else if(this.saldo<valor){
            console.log("Saldo insuficiente...")
         }
         
         else{
             this.saldo = this.saldo - valor
          }
        }
         
        else{
         console.log("Conta está inativa...")
        }
     }
}

//PROGRAMA PRINCIPAL: (TELA)

//ENTRADA DO USUARIO: 
const leia = require("prompt-sync")()      //variavel constante: nao pode modificar durante o programa 

let op = ""

let valor = 0 

let tipo = ""

console.log("1- CONTA POUPANÇA ")
console.log("2- CONTA CORRENTE")
console.log("3- CONTA ESPECIAL")

if (tipo="1"){
    console.log("CONTA POUPANÇA")

    //USUARIO DIGITAR numero da conta
    let numero = parseInt(leia("Digite o número da conta: ")) //parseInt: digitação em número inteiro 

    //USUARIO DIGITAR CPF da conta
    let cpf = leia("Digite o CPF: ")

    //ESTANCIAMENTO: 
    let c1 = new Conta(numero, cpf, 0, false)  //NENHUMA CONTA DO TIPO CONTA, APENAS CONTAS FILHAS!!!!!!

    //ativar conta
    c1.ativar()

    for(let x=1; x<=10; x++){
        console.log("Movimento "+x)
        console.log("Saldo da conta R$: "+c1.saldo)
    
        valor = parseInt(leia("Digite o valor: "))
    
        op = leia("Digite D (DÉBITO) ou C (CRÉDITO): ").toUpperCase()
    
        if(op=="C"){
            c1.credito(valor)
        }
        else if(op=="D"){
            c1.debito(valor)
        }
    }
}

//MOSTRAR saldo final da conta
console.log("Saldo final da conta R$: "+c1.saldo)