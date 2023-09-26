/*
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo
*/




const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let i = 0
let j = 1

function formatarNumero(numero){
    if (i == 0.0 || i == 1.0 || i> 1.8){
        return numero.toFixed(0)
    } else {
        return numero.toFixed(1)
    }
}


while (i <= 2){
    for (let k = 0; k < 3; k++){
        console.log(`I=${formatarNumero(i)} J=${formatarNumero(j)}`)
        j++
    }
    i += 0.2
    j = i + 1
}

