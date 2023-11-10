/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let a = parseFloat(line0[0]);
let b = parseFloat(line0[1]);
let c = parseFloat(line0[2]);
let x

if (a < b){ 
    x = a; a = b; b = x; 
} 
if (b < c){ 
    x = b; b = c; c = x; 
} 
if (a < b){ 
    x = a; a = b; b = x; 
}

a = Math.max(a,b,c)
c = Math.min(a,b,c)

if (a >= b+c){
    console.log("NAO FORMA TRIANGULO")
} else {
    if (a*a == (b*b) + (c*c)){
        console.log("TRIANGULO RETANGULO")
    }

    if (a*a > (b*b) + (c*c)){
        console.log("TRIANGULO OBTUSANGULO")    
    }

    if (a*a < (b*b) + (c*c)){
        console.log("TRIANGULO ACUTANGULO")
    }

    if (a == b && b == c){
        console.log("TRIANGULO EQUILATERO")
    }

    if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)){
        console.log("TRIANGULO ISOSCELES")
    }
}
