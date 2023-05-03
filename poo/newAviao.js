//programa: 03/05 - exemplo novo aviao 

//classe: 

class Aviao{
    constructor(ligado, velocidade, modelo){
        this.ligado = ligado;
        this.velocidade =  velocidade;
        this.modelo = modelo;
    }

    ligar(){
        console.log("Ligando...")
        this.ligado = true
    }

}

//estanciamneto 

let aviaoMay = new Aviao(false, 0, "Bimotor")
let aviaoAmanda = new Aviao(false, 0, "747")

//chamando o metodo

aviaoMay.ligar()
console.log(aviaoMay)