const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let vitoriaInter = 0
let vitoriaGremio = 0
let empate = 0

for (let i = 0; i < lines.length; i = i + 2) {
    let line = lines[i].split(" ")
    let Inter = Number(line[0])
    let Gremio = Number(line[1])

    if (Inter > Gremio){
        vitoriaInter++
    } else if (Gremio > Inter){
        vitoriaGremio++
    } else if (Inter == Gremio){
        empate++
    }
    
}


let grenais = 0
console.log('Novo grenal (1-sim 2-nao)')
grenais++

for (let j = 1; j < lines.length; j = j + 2) {
    let line0 = Number(lines[j])

   if (line0 == 1) {
        console.log('Novo grenal (1-sim 2-nao)')
        grenais++
    }
}


console.log(grenais + " grenais")
console.log('Inter:' + vitoriaInter)
console.log('Gremio:' + vitoriaGremio)
console.log('Empates:' + empate)

if (vitoriaGremio > vitoriaInter){
    console.log('Gremio venceu mais')
} else if (vitoriaInter > vitoriaGremio){
    console.log('Inter venceu mais')
} else if (vitoriaGremio == vitoriaInter){
    console.log("Nao houve vencedor")
}