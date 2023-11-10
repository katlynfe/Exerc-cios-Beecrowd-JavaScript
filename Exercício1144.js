/*
Escreva um programa que leia um valor inteiro N. N * 2 linhas de saída serão apresentadas na execução do programa, seguindo a lógica do exemplo abaixo. Para valores com mais de 6 dígitos, todos os dígitos devem ser apresentados.

Entrada
O arquivo de entrada contém um número inteiro positivo N (1 < N < 1000).

Saída
Imprima a saída conforme o exemplo fornecido.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let N = Number(parseInt(lines[0]));

for (let i = 1; i <= N; i++) {
    console.log(i + " " + i*i + " " +Math.pow(i,3))
    console.log(i + " " + (i*i + 1) + " " +(Math.pow(i,3)+1))
    
       
}
