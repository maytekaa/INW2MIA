//MAYTÊ SILVA DE VASCONCELOS 2MIA 

class Ferramentas {
    constructor (id, descricao, ativo, estoque, preco, modelo, marca){
        this.id = id;
        this.descricao = descricao;
        this.ativo = ativo;
        this.estoque = estoque;
        this.preco = preco;
        this.modelo = modelo;
        this.marca = marca
    }

    //METODOS 

    ativar(){
        this.ativo = true
    }

    incluirEstoque(valor){      
        if(this.ativo){
         if(valor<0){
            console.log("Impossível realizar quantidade de produtos negativa...")
         }

         else if(valor == 0){
            console.log("Impossível realizar quantidade de produtos zerada...")
         }
 
         else{
             this.estoque = this.estoque + valor
          }
        }
         
        else{
         console.log("O produto está inativo...")
        }
     }

     retirarEstoque(valor){      
        if(this.ativo){
         if(valor<0){
             console.log("Impossível realizar quantidade de produtos negativa...")
         }
 
         else if(valor == 0){
             console.log("Impossível realizar quantidade de produtos zerada...")
         }

         else if(this.estoque<valor){
            console.log("Não há estoque disponível, sentimos muito!...")
         }
         
         else{
             this.estoque = this.estoque - valor
          }
          
        }
         
        else{
         console.log("O produto está inativo...")
        }
     }

     valorCompra(){
        if(this.retirarEstoque){
            this.valorCompra = (this.preco*valor)
            }
        else{
            console.log("É necessário que você faça uma compra!!")
        }
        }
     }




//PROGRAMA PRINCIPAL: 

const leia = require("prompt-sync")()

let op = ""    //variável vazia


//TEXTOS (OPÇÕES) DO MENU: 
console.log("ZIPPY TOOLS")
console.log("BEM VINDO/A A ZIPPY TOOLS!!!\n")
console.log("O PARAÍSO DAS FERRAMENTAS!!\n")

op = leia("Deseja fazer compras? Digite S para SIM e N para NÃO: ").toUpperCase()

while(op == "S"){

    console.log("Iremos iniciar o cadastro do produto!!!")

    let id =  leia("Digite o id do produto: ")

    let descricao = leia("Digite a descrição do produto: ")

    let preco = leia("Digite o preço unitário do produto: ")

    let modelo = leia("Digite o modelo do produto: ")

    let marca = leia("Digite a marca do produto: ")

    console.log("Seu produto foi cadastrado!!")

    let p1 = new Ferramentas(id, descricao, false, 10, preco, modelo, marca)

    //ativar conta 
    p1.ativar() 

    for(let x=1; x<=5; x++){

        console.log("VENDA "+x)
        console.log(p1)
        valor = parseInt(leia("Qual é a quantidade de produtos que deseja comprar: "))
        p1.retirarEstoque(valor)
        console.log("O estoque atual deste produto é: "+p1.estoque) //mostra quantidade do estoque após o valor determinado
        console.log("O valor final desta compra é: "+p1.valorCompra)


    }

console.log(p1)
op = leia("Quantos produtos deseja adicionar ao seu estoque: ")
p1.incluirEstoque(valor);
console.log("O estoque atual deste produto é: "+p1.estoque)

}

console.log("Fim do programa...até breve!!")







