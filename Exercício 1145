/*
Escreva um programa que leia dois valores X e Y. A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.

Entrada
O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).

Saída
Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número, conforme exemplo abaixo. Não deve haver espaço em branco após o último valor da linha.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let line0 = lines[0].split(" ");

let x = Number(parseInt(line0[0]));
let y = Number(parseInt(line0[1]));


let linha = '';
for (let i = 1; i <= y; i++) {
  linha += i;

  if (i % x === 0 || i === y) {
    console.log(linha);
    linha = '';
  } else {
    linha += ' ';
  }
}



