/*
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

Saída
Imprima a soma de todos valores ímpares entre X e Y.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);


for (let i = 1; i <= N; i++){
    let impares = 0
    let line0 = lines[i].split(" ");
    let x = parseFloat(line0[0]);
    let y = parseFloat(line0[1]);
    
    if (x < y){
        for (let i = x+1; i < y; i++) {
            if (i % 2 != 0){
                impares += i
            } 
            
        } 
    } else {
        for (let i = y+1; i < x; i++) {
            if (i % 2 != 0){
                impares += i
            } 
            
        } 
    }
    
    console.log(impares)
}
