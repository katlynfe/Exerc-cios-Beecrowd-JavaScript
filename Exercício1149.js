/*
Faça um algoritmo para ler um valor A e um valor N. Imprimir a soma de A + i para cada i com os valores (0 <= i <= N-1). Enquanto N for negativo ou ZERO, um novo N(apenas N) deve ser lido.

Entrada
A entrada contém somente valores inteiros, podendo ser positivos ou negativos. Todos os valores estão na mesma linha.

Saída
A saída contém apenas um valor inteiro.
*/


const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let line0 = lines[0].split(" ");
let A = Number(line0[0])
let N = Number(line0[1])
let soma = 0


if (N <= 0){
    for (let j = 2; j < line0.length; j++) {
        N = Number(line0[j])
        
    }

    for (let i = 0; i < N; i++) {
        soma = soma + (A+i)
        
    }
}


console.log(soma)
