/*
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.

Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.

Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let N 
let posicao
let tamanho = lines.length
let maior = 0

for (let indice = 0; indice < tamanho; indice++) {
    N = parseInt(lines[indice]);
    
    if (maior < N){
        maior = N
        posicao = indice
    }

        
}

console.log(maior)
console.log(posicao+1)
