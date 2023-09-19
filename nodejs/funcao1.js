function escreverNoConsole(){ //criação da função
    console.log("Primeiro exemplo - função normal") //texto fixo
}

escreverNoConsole() //chamando a função 

//variação de função normal ou declarada 

const escreverNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variação do modo normal")
}

escreverNoConsoleVariacao()

//arrow function -  função seta ou flecha 
//toda arrow function usa os caracteres = junto com > 

const escreverComArrow = ()=>{  //entende que é uma função e não só uma constante devido ao => (sem espaço)
    console.log("Terceiro exemplo - Arrow Function") //o return é opcional 
}

escreverComArrow()

//arrow function => com parametro

const escreverComArrowParametro = (texto) => {
    console.log(texto)
} //se tiver apenas um parametro pode ser omitido as chaves {}

escreverComArrowParametro("Quarto exemplo - usando parametro") //valores
escreverComArrowParametro("Outro texto")


//função arrow que soma dois valores

const somarDois = (numero1, numero2)=>{
    console.log("A soma é "+(numero1+numero2))
}

//executando: 
console.log("------------------------")
somarDois(10,10) //pega o conteudo, atribui valores às variaveis e soma executando

//variação arrow function sem parenteses e sem chave -  apenas um parametro 

const varianteArrow = texto => console.log(texto) //--mais utlizado em Promises 
