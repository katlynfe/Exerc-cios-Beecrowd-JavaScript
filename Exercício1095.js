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


const I = 3
const J = 5

let i = 1
let j = 60


let acumuladora = 0

for (acumuladora = 1; j >= 0; acumuladora++) {
    console.log(`I=${i} J=${j}`)
    i += I
    j -= J
    
}

