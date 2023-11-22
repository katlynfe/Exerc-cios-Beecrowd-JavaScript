/*
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de Y ímpares consecutivos a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma dos consecutivos números ímpares a partir do valor X.
*/


const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);

soma = 0
for (let i = 1; i <= N; i++) {
    let line0 = lines[i].split(" ");
    let x = parseInt(line0[0]);
    let y = parseInt(line0[1]);

    while (y > 0) {
        if (x % 2 != 0){
            soma += x
            y--
        } else {
            x = x + 1
            soma += x
            y--
        }
        
        x = x + 2
    }  
    console.log(soma) 
    soma = 0

}


