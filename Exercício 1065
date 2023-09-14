/*
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);
let e = parseInt(lines[4]);

let par = 0

if (a % 2 == 0){
    par += 1
}

if (b % 2 == 0){
    par += 1
}

if (c % 2 == 0){
    par += 1
}

if (d % 2 == 0){
    par += 1
}

if (e % 2 == 0){
    par += 1
}

console.clear()

console.log(par+ " valores pares")
