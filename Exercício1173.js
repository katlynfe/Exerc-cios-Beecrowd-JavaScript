/*
Leia um valor e faça um programa que coloque o valor lido na primeira posição de um vetor N[10]. Em cada posição subsequente, coloque o dobro do valor da posição anterior. Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim sucessivamente. Mostre o vetor em seguida.

Entrada
A entrada contém um valor inteiro (V<=50).

Saída
Para cada posição do vetor, escreva "N[i] = X", onde i é a posição do vetor e X é o valor armazenado na posição i. O primeiro número do vetor N (N[0]) irá receber o valor de V.
*/


const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let dobra = []
let valor = Number(lines[0])

dobra[0] = valor

let valorDobrado = 1

console.log(`N[${0}] = ${valor}`)

for (let i = 1; i <= 9; i++) {
    
    valorDobrado = 2 * dobra[dobra.length - 1]
    dobra[dobra.length] = valorDobrado
    
    console.log(`N[${i}] = ${valorDobrado}`)
}
