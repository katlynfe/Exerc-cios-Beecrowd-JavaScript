/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let line1 = lines[1].split(" ")

let peca1 = parseInt(line0[0]);
let nPecas1 = parseInt(line0[1]);
let valor1 = parseFloat(line0[2]);

let peca2 = parseInt(line1[0]);
let nPecas2 = parseInt(line1[1]);
let valor2 = parseFloat(line1[2]);

let valorPago = nPecas1*valor1 + nPecas2*valor2;
console.log("VALOR A PAGAR: R$ " +valorPago.toFixed(2));
