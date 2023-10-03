/*
Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.

Entrada
O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.

Saída
Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada, inclusive ambos se for o caso.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);

let soma = 0

if (x < y){
    for (let indice = x; indice <= y; indice++) {
        if (indice % 13 != 0){
            soma += indice
        }
        
    }
} else if (x > y){
    for (let indice = y; indice <= x; indice++) {
        if (indice % 13 != 0){
            soma += indice
        }
        
    }
}


console.log(soma)
