/*
Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.
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

if (A < B+C && B < A+C && C < A+B){
    let perimetro = A+B+C
    console.log("Perimetro = " +perimetro.toFixed(1))
} else {
    let area = (A+B)*C/2
    console.log("Area = " +area.toFixed(1))
}
