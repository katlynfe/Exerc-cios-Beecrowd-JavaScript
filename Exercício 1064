/*
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.

Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.

Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseFloat(lines[0]);
let valor2 = parseFloat(lines[1]);
let valor3 = parseFloat(lines[2]);
let valor4 = parseFloat(lines[3]);
let valor5 = parseFloat(lines[4]);
let valor6 = parseFloat(lines[5]);
let media = 0

for (let contadores = 0; contadores < 6; contadores += 1) {
    if (valor1 > 0){
        contadores += 1
        media += valor1
    }
    if (valor2 > 0){
        contadores += 1
        media += valor2
    }
    if (valor3 > 0){
        contadores += 1
        media += valor3

    }
    if (valor4 > 0){
        contadores += 1
        media += valor4
    }
    if (valor5 > 0){
        contadores += 1
        media += valor5
    }
    if (valor6 > 0){
        contadores += 1
        media += valor6
    }
    console.log(contadores+ " valores positivos")
    console.log((media/contadores).toFixed(1))
    break
}
