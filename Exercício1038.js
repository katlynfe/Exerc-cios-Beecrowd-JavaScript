/*
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.



Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let val1 = parseInt(line0[0]);
let val2 = parseInt(line0[1]);

let cachorroQuente = 4;
let xSalada = 4.5;
let xBacon = 5;
let torradaSimples = 2;
let refrigerante = 1.5;

if (val1 == 1){
    let resultado1 = cachorroQuente * val2;
    console.log("Total: R$ " + resultado1.toFixed(2));
} else if (val1 == 2){
    let resultado2 = xSalada * val2;
    console.log("Total: R$ " + resultado2.toFixed(2));
} else if (val1 == 3){
    let resultado3 = xBacon * val2;
    console.log("Total: R$ " + resultado3.toFixed(2));
} else if (val1 == 4){
    let resultado4 = torradaSimples* val2;
    console.log("Total: R$ " + resultado4.toFixed(2));
} else if (val1 == 5){
    let resultado5 = refrigerante * val2;
    console.log("Total: R$ " + resultado5.toFixed(2));
}

