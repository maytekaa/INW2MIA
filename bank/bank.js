//MAYTÊ SILVA DE VASCONCELOS- 2MIA

//usar "this." em classes, se é variável, não utiliza-se 

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
//CONTA POUPANÇA: 
class Poupança extends Conta {
    constructor(numero, cpf, saldo, ativo, diaAniversarioPoupanca){
        super(numero, cpf, saldo, ativo);
        this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }

    //METODO
    correcao(dia){
        if(this.diaAniversarioPoupanca == dia){
            this.saldo = (this.saldo*0.05) + this.saldo
            console.log("Parabéns!! Hoje é o aniversário da sua conta, que tal um bônus!!!")
            console.log("Seu saldo atualizado após o bônus: "+this.saldo)
        }
        else {
            console.log("Infelizmente hoje não é o aniversário da sua conta...na próxima quem sabe!")
        }
    }
}

//CONTA CORRENTE: 
class Corrente extends Conta {
    constructor(numero, cpf, saldo, ativo, contadorTalao){
        super(numero, cpf, saldo, ativo);
        this.contadorTalao = contadorTalao             //contador: limite de talao da conta
    }

    //METODO: 
    pedirTalao(quantidade){                      
        if(quantidade>this.contadorTalao){                //quantidade: a quantidade de talao que o usuario pedir 
            console.log("Impossível realizar, quantidade indisponível...")
        }
        else if((quantidade*30)>this.saldo){
            console.log("Impossível realizar, saldo indisponível...")
        }
        else{
            console.log("Emitindo Talão...")
            this.contadorTalao = this.contadorTalao - quantidade 
            this.debito(quantidade*30)
        }

        //CONTAR talões disponíveis
        console.log("Talões atuais disponíveis: "+this.contadorTalao)

        //MOSTRAR saldo atual da conta
        console.log("Saldo atual da conta R$: "+this.saldo)
    }
}

//CONTA ESPECIAL:
class Especial extends Conta {
    constructor(numero, cpf, saldo, ativo, limite){
        super(numero, cpf, saldo, ativo);
        this.limite = limite
    }

    //METODO: 
    usarLimite(valor){
        if(-valor>this.limite){           //USAR LIMITE-PASSO 2: se o valor do saldo atualizado de forma positiva for > limite, nao permitir utilizar o limite
            console.log("Impossível realizar, limite indisponível...")
        }
        else{
            this.limite = this.limite + valor          //USAR LIMITE-PASSO 3: se nao, debita-se o saldo do valor atualizado do limite (soma o valor negativo --> -+=-)
            this.credito(-valor)                     //USAR LIMITE-PASSO 4: credita do limite o valor que nao permitira a conta ficar negativa (saldo 0)
        }

        //MOSTRAR limite atual da conta 
        console.log("Limite atual R$: "+this.limite)

    }
}



//PROGRAMA PRINCIPAL: (TELA)

//ENTRADA DO USUARIO: 
const leia = require("prompt-sync")()   //variavel constante: nao pode modificar durante o programa

let op= ""   //variável vazia

do { 

//TEXTOS (OPÇÕES) DO MENU: 
console.log("BANK")
console.log("BEM VINDO/A AO BANCO FEVASGO!!!\n")
console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")

console.log("1- CONTA POUPANÇA ")
console.log("2- CONTA CORRENTE")
console.log("3- CONTA ESPECIAL")
console.log("4- SAIR")

 op = leia("Digite o número da sua opção: ") 

 //ESCOLHA DO USUÁRIO NO MENU E ENTRADA DA CONTA ESCOLHIDA: 

 //CONTA POUPANÇA
 if(op == "1"){

    //entrada da conta em texto
    console.log("BANK")
    console.log("BEM VINDO/A AO BANCO FEVASGO!!! \n")
    console.log("ESTA É A CONTA POUPANÇA!\n")
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")

    let numero = leia("Digite o número da conta: ")
    let cpf = leia("Digite o CPF da conta: ")
    let diaAniversarioPoupanca = leia("Digite o dia de aniversário da conta: ")

    //ESTANCIAMENTO
    let cp1 = new Poupança(numero, cpf, 0, false, diaAniversarioPoupanca)

    //ativar conta
    cp1.ativar()

    //adicionar crédito ou débito na conta

    for(let x=1; x<=10; x++){
        console.log("Movimento "+x)
        valor = parseInt(leia("DIgite o valor: "))
        opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase()

        if(opcao == "C"){
            cp1.credito(valor)
        }
        else if(opcao == "D"){
            cp1.debito(valor)
        }
        console.log("Saldo atual da conta R$: "+cp1.saldo)
    }

    //testar se o dia do aniversário é o mesmo dia atual
    let dia = leia("Digite o DIA de hoje: ")
    cp1.correcao(dia)         //CHAMANDO METODO
    
 }




 //CONTA CORRENTE
 else if(op == "2"){

    //entrada da conta em texto
    console.log("BANK")
    console.log("O BANCO DO 2MIA: \n")
    console.log("BEM VINDO/A AO BANCO FEVASGO!!!\n")
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")

    let numero = leia("Digite o número da conta: ")
    let cpf = leia("Digite o CPF da conta: ")

    //ESTANCIAMENTO
    let cc1 = new Corrente(numero, cpf, 0, false, 3)
    
    //ativar conta 
    cc1.ativar()

    //MOVIMENTOS C E D 
    for(let x=1; x<=10; x++){
        console.log("Movimento "+x)
        valor = parseInt(leia("Digite o valor: "))
        opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase()

        if(opcao == "C"){
            cc1.credito(valor)
        }
        else if(opcao == "D"){
            cc1.debito(valor)
        }
        console.log("Saldo atual da conta R$: "+cc1.saldo)
    }
        escolha = leia("Você deseja pedir um talão? Digite S para SIM e N para NÃO:  ").toUpperCase()    
        
        if(escolha == "S"){
            quantidade = parseInt(leia("Digite a quantidade de talões desejados: "))
            cc1.pedirTalao(quantidade)     //CHAMANDO METODO
        }
        else{ 
            console.log("Fim do programa...até breve!")
        }
 }




 //CONTA ESPECIAL
 else if(op == "3"){

    //entrada da conta em texto
    console.log("BANK")
    console.log("BEM VINDO/A AO BANCO FEVASGO!!! \n")
    console.log("ESTA É A CONTA ESPECIAL!\n")
    console.log("AQUI É ONDE OS HUMILHADOS SÃO EXALTADOS!!")

    let numero = leia("Digite o número da conta: ")
    let cpf = leia("Digite o CPF da conta: ")

    //ESTANCIAMENTO
    let ce1 = new Especial(numero, cpf, 0, false, 1000)

    //ativar conta
    ce1.ativar()

    for(let x=1; x<=10; x++){
        console.log("Movimento "+x)
        valor = parseInt(leia("Digite o valor: "))
        opcao = leia("Digite D para Débito ou C para Crédito: ").toUpperCase()

        if(opcao == "C"){
            ce1.credito(valor)
        }
        else if(opcao == "D"){                   //saldo atualizado: saldo atual da conta - o valor que deseja-se debitar ou creditar
            if((ce1.saldo-valor) < 0){                 //validar: SE o saldo atualizado será < 0 
                escolha = leia("Esse débito deixará sua conta negativa, você deseja usar seu limite? Digite S para SIM e N para NÃO:  ").toUpperCase()
        
                if(escolha == "S"){
                    ce1.usarLimite(ce1.saldo-valor)           //USAR LIMITE-PASSO 1: se o saldo atualizado for < 0 e o usuario digitar S para o limite, chamar o metodo, com o saldo atualizado 
                    ce1.debito(valor)                         //USAR LIMITE-PASSO 5: depois que utilizar o limite, debita o valor solicitado INICIALMENTE
                }
                else{ 
                    console.log("Não é possível realizar a operação, pois sua conta ficará negativada.")    //se o usuario digitar N 
                }
            } else {
                ce1.debito(valor)           //debita normalmente se o valor solicitado não for deixar o saldo negativo
            }
        }
        console.log("Saldo atual da conta R$: "+ce1.saldo)
    }
    
 }

 //SAIR
 else if(op == "4"){
    console.log("Saindo do programa...")
 }

 //QUALQUER CARACTERE SEM SER 1, 2, 3 E 4
 else{
    console.log("Digitação inválida...")
 }
} 





//SAIR
while (op != "4") //enquanto apertar a opção 4: MOSTRAR em texto o fim do programa 
console.log("Fim de programa...até breve!")





//NÃO APAGAR!!!!!!!!!!
/*let op = ""

let valor = 0 

let tipo = ""

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
        console.log("Saldo atual da conta R$: "+c1.saldo)
    
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
console.log("Saldo final da conta R$: "+c1.saldo)*/
