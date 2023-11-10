/*
Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.

Entrada
A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

Saída
Apresente a duração do jogo conforme exemplo abaixo.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");

let horaInicial = parseInt(line0[0]);
let horaFinal = parseInt(line0[1]);

if (horaInicial >= horaFinal){
    let tempo = 24 - horaInicial + horaFinal
    console.log("O JOGO DUROU " +tempo+ " HORA(S)")
} else {
    let tempo = horaFinal - horaInicial
    console.log("O JOGO DUROU " +tempo+ " HORA(S)")
}
