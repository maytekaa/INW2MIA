//programa 2: aula 26/04

//informacoes e regras para executar programa: 
//decolar >200km/h 
// pousar <200km/h
//velocidade: 10km/h
//cruzeiro: entre 300km/h e 800km/h (constante) 

//objetos - classes 
let aviao = { velocidade: 0, 
    velocidadeMaxima: 800, 
    ligado: false, 
    modelo: "Boeing 777", 
    companhiaAerea: "Latam", 
    cor: "Branco", 
        
    //LIGANDO AVIAO
    ligarAviao: function(){ 
        aviao.ligado = true 
        console.log("Ligando o avião...")
     }, 
        
    acelerarAviao: function() { 
        if(this.ligado && this.velocidade<=this.velocidadeMaxima)
        { this.velocidade += 10 
            console.log("Acelerando...")} 

            //contabilizar de 10 ate 200- ACELERANDO 
            for (let i = 0; i <= 200; i++)  {
             this.velocidade=i;
             console.log("Acelerando... Velocidade atual: "+this.velocidade);
            i=i+9; }
     },
    
    decolarAviao: function() {

        //DECOLANDO
        if(this.ligado && this.velocidade==200){
            for (let i = 200; i <= 300; i++) {
             this.velocidade=i;
            console.log("Decolando... Velocidade atual: "+this.velocidade);
            i=i+9; } }
             
            //velocidade cruzeiro(constante)
            for (let i = 300; i <= 800; i++) {
             this.velocidade=i;
            console.log("Velocidade cruzeiro... Velocidade atual: "+this.velocidade);
            i=i+9; } 
     },
            
    pousarAviao: function() {

        //DIMINUINDO A VELOCIDADE PARA O POUSO 
        if(this.ligado && this.velocidade==800){
            for (let i = 800; i >= 200; i--) {
            this.velocidade=i;
            console.log("Iniciando pouso... Velocidade atual: "+this.velocidade);
            i=i-9; } }

            //POUSO 
            for (let i = 200; i >= 0; i--) {
            this.velocidade=i;
            console.log("Pousando... Velocidade atual: "+this.velocidade);
            i=i-9; }

     }, 

    desligarAviao: function(){ 
        aviao.ligado = false 
        console.log("Desligando o avião...")
        console.log("Velocidade Atual: "+this.velocidade)
     }

    } 
//chamando metodo LIGAR:
            
aviao.ligarAviao("Ligando o avião...") 
            
//chamando metodo ACELERAR: 
            
aviao.acelerarAviao("Acelerando...") 

//chamando metodo DECOLAR:

aviao.decolarAviao("Decolando...")

//chamando metodo POUSAR: 

aviao.pousarAviao("Pousando...")

//chamando metodo DESLIGAR: 

aviao.desligarAviao("Desligando o avião...")



            
 
            

            
 
            



