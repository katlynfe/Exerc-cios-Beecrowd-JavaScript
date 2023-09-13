/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let A = parseFloat(line0[0]);
let B = parseFloat(line0[1]);
let C = parseFloat(line0[2]);

let raiz = Math.sqrt(B*B - 4 * A*C);
let bhaskara1 =(-B - raiz)/(2*A);
let bhaskara2 =(-B + raiz)/(2*A);

if ((raiz >= 0) && (A != 0)){
    console.log("R1 = " +bhaskara2.toFixed(5));
    console.log("R2 = " +bhaskara1.toFixed(5));
} else {
    console.log("Impossivel calcular");
}
