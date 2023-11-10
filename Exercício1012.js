/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
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

const PI = 3.14159

let areaTri = A*C/2;
let areaC = PI * C*C;
let areaT = (A+B)*C/2;
let areaQ = B*B;
let areaR = A*B;

console.log("TRIANGULO: " + areaTri.toFixed(3))
console.log("CIRCULO: " +areaC.toFixed(3))
console.log("TRAPEZIO: " +areaT.toFixed(3))
console.log("QUADRADO: " +areaQ.toFixed(3))
console.log("RETANGULO: " +areaR.toFixed(3))
