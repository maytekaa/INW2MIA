//Promise 2 

//criação de um vetor
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p 
.then(valor => valor[0])   //retorna os nomes
.then(valor => console.log(valor))