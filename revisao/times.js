//programa para mostrar em tabela os times e sua pontuação

let times = ['SFC','SPFC','SCCP','SEP']
let pontos = [3,3,3,3]

console.log("TIME\tPONTOS")
for(let x=0; x<times.length; x++){
    console.log(times[x]+'\t'+pontos[x])
}