const leia = require("prompt-sync")()

//variaveis

let cod = ["C1", "C2", "C3"]
let descricao = ["ChipRastreamento1", "ChipRastreamento2", "ChipRastreamento3"]
let valorDoacao = [10.00, 8.00, 6.00]
let estoque = [0,0,0]
let movimento = [0,0,0]
let opcaoMenuPrincipal = ""
let opcaoMenuSecundario
let auxCod = ""
let posicao = -1
let carrinhoVazio = true


//programa principal

//menu
while(opcaoMenuPrincipal !="2"){
    console.log("FEVASGO PETS\n\n")
    console.log("MENU PRINCIPAL")
    console.log("1- OPÇÕES")
    console.log("2- SAIR")
    opcaoMenuPrincipal = leia("Digite o número da sua opção: ")

    //submenu

    if(opcaoMenuPrincipal =="1"){
        opcaoMenuSecundario=""

        //opcoes

        while(opcaoMenuSecundario !="6"){
            console.log("SUB-MENU: OPÇÕES\n\n")
            console.log("1 - REGISTROS")
            console.log("2 - ALTERAR REGISTROS")
            console.log("3 - CADASTRAR NOVO REGISTRO")
            console.log("4 - EXCLUIR UM REGISTRO")
            console.log("5 - CARRINHO")
            console.log("6 - SAIR")
            opcaoMenuSecundario = leia("Digite o número da sua opção: ")

            //OPÇÃO 1

            if(opcaoMenuSecundario == "1"){
                console.log("MOSTRANDO REGISTROS\n")
                console.log("COD\tDESCRIÇÃO\t\t\tDOAÇÃO\t\tESTOQUE")
                for(let x=0 ; x<cod.length; x++){
                    console.log(cod[x]+"\t"+descricao[x]+"\t\t"+valorDoacao[x]+"\t\t"+estoque[x])
                }
            }

            //OPÇÃO 2

            else if(opcaoMenuSecundario =="2"){
                console.log("ALTERANDO UM REGISTRO\n")
                auxCod = leia("Digite o código do produto que deseja alterar: ").toUpperCase()
                for(let x= 0; x<cod.length; x++){
                    if(auxCod == cod[x]){
                        posicao = x
                    }
                }
                if(posicao == -1){
                    console.log("Produto não encontrado")
                }
                else{
                    cod[posicao] = (leia("Digite o novo código: "))
                    descricao[posicao] = (leia("Digite a nova descrição: "))
                    valorDoacao[posicao] = (parseFloat(leia("Digite o novo valor da doação: ")))
                    estoque[posicao] = (parseInt(leia("Digite o novo estoque: ")))
                }
            }
            
            //OPÇÃO 3

            else if(opcaoMenuSecundario == "3"){
                console.log("CADASTRANDO UM NOVO REGISTRO\n")
                cod2 = leia("Digite o novo código: ").toUpperCase()
                descricao2 = leia("Digite a nova descrição: ")
                valorDoacao2 = parseFloat(leia("Digite o novo valor da doação: "))
                estoque2 = parseInt(leia("Digite o novo estoque: "))
            
                cod[cod.length] = cod2
                descricao[descricao.length] = descricao2
                valorDoacao[valorDoacao.length] = valorDoacao2
                estoque[estoque.length] = estoque2
            
                console.log("O novo registro foi cadastrado com sucesso! Aperte 1 para exibir todos os registros.")
            }
            
            //OPÇÃO 4 

            else if(opcaoMenuSecundario == "4"){
                console.log("EXCLUINDO UM REGISTRO\n")
                excluirRegistro = leia("Digite o código do produto que deseja excluir: ").toUpperCase()
                for(let x = 0; x<cod.length; x++){
                    if(excluirRegistro == cod[x]){
                        posicao = x
                    }
                }
            
                if(posicao === -1){
                    console.log("Produto não encontrado.")

                } else {
                    for(let x = posicao; x<cod.length; x++){
                        cod[x] = cod[x + 1]
                        descricao[x] = descricao[x + 1]
                        valorDoacao[x] = valorDoacao[x + 1]
                        estoque[x] = estoque[x + 1]
                    }
            
                    cod.length = cod.length -1
                    descricao.length = descricao.length -1 
                    valorDoacao.length = valorDoacao.length -1
                    estoque.length = estoque.length -1 
            
                    console.log("Registro excluído com sucesso! Aperte 1 para exibir todos os registros.")
                }

            }
            
            //OPÇÃO 5

            else if(opcaoMenuSecundario == "5"){
                console.log("CARRINHO DE COMPRAS\n")
                console.log("ITENS NO CARRINHO:");
                for (let x = 0;  x<movimento.length; x++){
                    if (movimento[x]>0){
                        carrinhoVazio = false
                        adicionarItens = leia("Digite ")
                    }
                }

                if (carrinhoVazio) {
                    console.log("O carrinho está vazio.");
                }
            }
        
            }
            
        }
    }


//fim de programa

console.log("Até breve!")