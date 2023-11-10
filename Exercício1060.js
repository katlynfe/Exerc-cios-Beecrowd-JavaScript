/*
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

Entrada
Seis valores, negativos e/ou positivos.

Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.
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

for (let contadores = 0; contadores < 6; contadores += 1) {
    if (valor1 > 0){
        contadores += 1
    }
    if (valor2 > 0){
        contadores += 1
    }
    if (valor3 > 0){
        contadores += 1
    }
    if (valor4 > 0){
        contadores += 1
    }
    if (valor5 > 0){
        contadores += 1
    }
    if (valor6 > 0){
        contadores += 1
    }
    console.log(contadores+ " valores positivos")
    break
}
