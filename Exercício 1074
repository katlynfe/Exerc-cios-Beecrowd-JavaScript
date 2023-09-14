/*
Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.

Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).

Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);

for (let i = 1; i <= N; i++){
    let x = parseInt(lines[i]);
    if (x == 0){
        console.log("NULL")
    } else if (x % 2 == 0 && x > 0){
        console.log("EVEN POSITIVE")
    } else if (x % 2 == 0 && x < 0){
        console.log("EVEN NEGATIVE")
    } else if (x % 2 != 0 && x > 0){
        console.log("ODD POSITIVE")
    } else if (x % 2 != 0 && x < 0){
        console.log("ODD NEGATIVE")
    }
}
