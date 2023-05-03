// programa aula: 03/05

//classe: 

class Pessoa {
    constructor(cpf, nome, anoNasciemnto){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNasciemnto = anoNasciemnto
    }

    //metodo 

    mostrarIdade(){
        console.log("Sua idade é: "+(2023-this.anoNasciemnto))
    }
}

//estanciamento 

let cliente1 = new Pessoa("11.222.333-44", "Paulo",2000)
let cliente2 = new Pessoa("222.444.555-33", "Maria",2003)

//chamando o metodo

console.log(cliente1.nome)
cliente1.mostrarIdade()

console.log(cliente2.nome)
cliente2.mostrarIdade()