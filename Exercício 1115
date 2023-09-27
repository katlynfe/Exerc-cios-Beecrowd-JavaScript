/*
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

Entrada
A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

Saída
Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = lines.length

for (let i = 0; i <= N; i++){
    let line0 = lines[i].split(" ");
    let x = parseInt(line0[0]);
    let y = parseInt(line0[1]);
    
    if (x > 0 && y > 0){
        console.log("primeiro")
    } else if (x < 0 && y > 0){
        console.log("segundo")
    } else if (x < 0 && y < 0){
        console.log("terceiro")
    } else if (x > 0 && y < 0){
        console.log("quarto")
    } else if (x == 0|| y == 0 || (x == 0 && y == 0)){
        break
    }
}
