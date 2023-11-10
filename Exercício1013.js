/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/


const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let a = parseInt(line0[0]);
let b = parseInt(line0[1]);
let c = parseInt(line0[2]);

let maiorAB = (a + b + Math.abs(a-b))/2;

if (maiorAB == a){
let maiorAC = (a+c+ Math.abs(a-c))/2;
console.log(maiorAC + " eh o maior");
} else if (maiorAB == b){
    let maiorBC = (b+c+Math.abs(b-c))/2;
    console.log(maiorBC + " eh o maior");
}
