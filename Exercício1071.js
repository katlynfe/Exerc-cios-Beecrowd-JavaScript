/*
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.

Entrada
O arquivo de entrada contém dois valores inteiros.

Saída
O programa deve imprimir um valor inteiro. Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let contador = 0
let impares = 0

if (x < y){
    for (let i = x+1; i < y; i++) {
        if (i % 2 != 0){
            impares += i
        } 
        
    } 
} else {
    for (let i = y+1; i < x; i++) {
        if (i % 2 != 0){
            impares += i
        } 
        
    } 
}

console.log(impares)
