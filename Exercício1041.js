/*
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).



Se o ponto estiver na origem, escreva a mensagem “Origem”.

Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

Entrada
A entrada contem as coordenadas de um ponto.

Saída
A saída deve apresentar o quadrante em que o ponto se encontra.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let x = parseFloat(line0[0]);
let y = parseFloat(line0[1]);

if ((x == 0) && (y == 0)){
    console.log("Origem")
} else if ((x == 0) && (y > 0) || (x == 0) && (y < 0)){
    console.log("Eixo Y")
} else if ((y == 0) && (x > 0) || (y == 0) && (x< 0)){
    console.log("Eixo X")
} else if ((x > 0) && (y > 0)){
    console.log("Q1")
} else if ((x < 0) && (y > 0)){
    console.log("Q2")
} else if ((x < 0) && (y < 0)){
    console.log("Q3")
} else if ((x > 0) && (y < 0)){
    console.log("Q4")
}
