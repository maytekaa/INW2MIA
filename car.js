let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2018,
    preco: 45000,
    velocidade : 0,
    ligado : false,
    velocidadeMaxima:200,
    motor: {
     cilindradas: 1.4,
     potencia: 100
     },
     acelerar : function()
     {
     console.log("Velocidade atual "+this.velocidade)
    
     if(this.ligado && this.velocidade<=this.velocidadeMaxima){
     this.velocidade += 10
    
     console.log("Acelerando...")
     console.log("Velocidade atual "+this.velocidade)
     }
     
     },
    ligarCarro : function(){
     carro.ligado = true
     console.log("Ligando o carro...")
    },
    
    frear:  function (){
        console.log("Velocidade atual "+this.velocidade)
        if(this.ligado && this.velocidade>=10){
        this.velocidade -= 10
        console.log("Freando...")
        console.log("Velocidade atual "+this.velocidade)
        }
        },
    desligarCarro : function (){
        console.log("Desligando o carro...")
        carro.ligado = false
       }
    }
      
    console.log("Ligando o carro e saindo...")
    carro.ligarCarro()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    carro.acelerar()
    console.log(carro.velocidade)
    carro.frear()
    carro.frear()
    carro.frear()
    carro.frear()
    carro.frear()
    carro.frear()
    carro.desligarCarro();
