/*
Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.

Entrada
Não há nenhuma entrada neste problema.

Saída
Imprima a sequencia conforme exemplo abaixo.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


const I = 2
const J = 1

let i = 1
let j = 7


let acumuladora = 0

for (acumuladora = 1; i <= 9; acumuladora++) {
    console.log(`I=${i} J=${j}\nI=${i} J=${j-J}\nI=${i} J=${j-2}`)
    i += I
    j += I
    
}

