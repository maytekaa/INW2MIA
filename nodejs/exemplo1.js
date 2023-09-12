//Promise 

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{  //função anonima
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

//a partir da resposta, ele começa a processar 

falarDepoisDe(3, "OI, TURMA 2MIA")
.then(frase => frase.concat(" ,texto da Promise!!")) //.concat: contatena uma frase com a outra - retorna a frase
.then(novaFrase => console.log(novaFrase))  //.then: executa e vai para o próximo passo

