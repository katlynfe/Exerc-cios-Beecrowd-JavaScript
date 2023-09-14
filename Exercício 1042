/*
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

Entrada
A entrada contem três números inteiros.

Saída
Imprima a saída conforme foi especificado.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let line0 = lines[0].split(" ");
let val1 = parseInt(line0[0]);
let val2 = parseInt(line0[1]);
let val3 = parseInt(line0[2]);

if ((val1 > val2) && (val1>val3) && (val2 > val3)){
    console.log(val3)
    console.log(val2)
    console.log(val1)
    console.log("")
    console.log(val1)
    console.log(val2)
    console.log(val3)
} else if ((val1 > val2) && (val1 > val3) && (val3 > val2)){
    console.log(val2)
    console.log(val3)
    console.log(val1)
    console.log("")
    console.log(val1)
    console.log(val2)
    console.log(val3)
} else if ((val2 > val1) && (val2 > val3) && (val1 > val3)){
    console.log(val3)
    console.log(val1)
    console.log(val2)
    console.log("")
    console.log(val1)
    console.log(val2)
    console.log(val3)
} else if ((val2 > val1) && (val2 > val3) && (val3 > val1)){
    console.log(val1)
    console.log(val3)
    console.log(val2)
    console.log("")
    console.log(val1)
    console.log(val2)
    console.log(val3)
} else if ((val3 > val1) && (val3 > val2) && (val1 > val2)){
    console.log(val2)
    console.log(val1)
    console.log(val1)
    console.log("")
    console.log(val1)
    console.log(val2)
    console.log(val3)

} else if ((val3 > val1) && (val3 > val2) && (val2 > val1)){
    console.log(val1)
    console.log(val2)
    console.log(val3)
    console.log("")
    console.log(val1)
    console.log(val2)
    console.log(val3)
}

