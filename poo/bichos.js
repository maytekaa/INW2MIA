//programa: 10/05 - notação uml: nome da classe, atributos (o que ela tem) e metodos (o que ela faz)

//CLASSE 1: Animal
class Animal {
    constructor(tipo, porte, femea, nascimento){     //obrigatoriedade 
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea; 
        this.nascimento = nascimento
    }

    //METODO - mostrar que o animal está fazendo barulho 
    fazerBarulho(){
        console.log("Fazendo barulho...")
    }

    //METODO - cálculo da idade do animal
    retornarIdade(anoAtual){
        return anoAtual - this.nascimento 
    }
}

//--------

//SUBCLASSE 2: Gato

//extends: extensão de uma classe com novos atributos

//super: referencia a classe mãe 

class Gato extends Animal {
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }
    
    //METODO - mostrar que o gato está miando 
    miar(){
        console.log("Miauuu...")
    }
}

//SUBCLASSE 3: Cachorro

class Cachorro extends Animal {
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor 
    }

    //METODO - mostrar que o cachorro está latindo
    latir(){
        console.log("Au Au...Au Au...")
    }
}

//--------

//programa principal - ESTANCIAMENTO
let bicho1 = new Animal("mamífero", "médio", false, 2020)
let Frajola = new Gato("felino", "Sphynx", "preto")
let John = new Cachorro("canino", "Pastor Alemao", "Capa preta")

//--------

//CHAMANDO O METODO

//*classe Animal + estanciamento bicho1:
console.log(bicho1)

console.log("O porte do bicho 1 é: "+bicho1.porte) 

bicho1.fazerBarulho()

//*subclasse Gato + estanciamento Frajola: 
Frajola.fazerBarulho()

Frajola.miar()

Frajola.nascimento = 2021
console.log("A idade do Frajola é: "+Frajola.retornarIdade(2023))

//*subclasse Cachorro + estaciamento John: 
John.fazerBarulho()

John.latir()

John.nascimento = 2018
console.log("A idade do John é: "+John.retornarIdade(2023))

//float: número com vírgula