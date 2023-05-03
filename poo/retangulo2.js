//programa 03/05

//notação uml: nome da classe, atributos (o que ela tem) e metodos (o que ela faz)

//estanciar: criar um objeto na memoria com uma classe 

//this: palavra reservada que usa-se dentro da classe para fazer uma referencia dentro da propria classe 

//CLASSE SEMPRE COM LETRA MAIUSCULA 

//classe: 

class Retangulo{                          
    constructor(base, altura){           //constructor: obrigatoriedade 
        this.base = base;
        this.altura = altura
    }

    mostrarArea(){
        console.log("A área é: "+this.altura * this.base)
    }
}

//programa principal (metodo)- estanciamento 

let objeto1 = new Retangulo(5,3)
let objeto2 = new Retangulo(4,2)

//chamando o metodo

console.log("Área dos retângulos:")
console.log("Retângulo 1:")
objeto1.mostrarArea()

console.log("Retângulo 2:")
objeto2.mostrarArea()