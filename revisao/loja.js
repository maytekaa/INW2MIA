//variaveis com as informações dos produtos 
//

const leia = require("prompt-sync")()

//variaveis
let codigos = ["COD001", "COD002", "COD003", "COD004", "COD005"]
let produtos = ["TECLADO","MOUSE","MONITOR","CADEIRA","CPUGAME"]
let valor = [20,10,150,700,800]
let estoque = [0,0,0,0,0]
let vendas = [0,0,0,0,0]

//processo da tabela com as informações 
console.log("COD\t\tPRODUTO\t\tVALOR\t\tESTOQUE")
console.log("----------------------------------------------------------------")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produtos[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
console.log("----------------------------------------------------------------")

//cadastro de estoque
console.log("CADASTRAMENTO DE ESTOQUE")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+' - '+produtos[i])
    estoque[i] = parseInt(leia("Digite a quantidade de estoque : "))
}

//processo da tabela com as informações
console.log("COD\t\tPRODUTO\t\tVALOR\t\tESTOQUE")
console.log("----------------------------------------------------------------")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produtos[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
console.log("----------------------------------------------------------------")

//processo de venda dos produtos
console.log("PROCESSO DE VENDA")
let auxCod = leia("Digite o código do produto que deseja comprar : ").toUpperCase()
for(let i=0; i<codigos.length; i++){
    if(auxCod == codigos[i]){
        console.log(codigos[i]+' - '+produtos[i]+' estoque : '+estoque[i])

        vendas[i] = parseInt(leia("Digite a quantidade que deseja comprar: ")) //quantidade de produtos que deseja

        console.log("Valor total da compra : "+(vendas[i]*valor[i]))  //mostra o valor total da compra 
        estoque[i]= estoque[i]-vendas[i]  //contagem de retirar a compra do estoque
    }
}

console.log("COD\t\tPRODUTO\t\tVALOR\t\tESTOQUE")  //mostra a tabela de um produto específico após a venda (dúvida)
console.log("----------------------------------------------------------------")

//rever essa parte
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t\t'+produtos[i]+'\t\t'+valor[i]+'\t\t'+estoque[i])
}
console.log("----------------------------------------------------------------")