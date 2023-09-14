/*
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.

Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.

Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor1 = parseInt(lines[0]);
let valor2 = parseInt(lines[1]);
let valor3 = parseInt(lines[2]);
let valor4 = parseInt(lines[3]);
let valor5 = parseInt(lines[4]);

for (let contador = 0; contador < 5; contador += 1) {
    if (valor1 %2 == 0){
        contador += 1
    } 
    if (valor2 %2 == 0){
        contador += 1
    } 
    if (valor3 %2 == 0){
        contador += 1
    } 
    if (valor4 %2 == 0){
        contador += 1
    } 
    if (valor5 %2 == 0){
        contador += 1
    } 
    console.log(contador+ " valor(es) par(es)")
    break
}

for (let contador = 0; contador < 5; contador += 1) {
    if (valor1 %2 != 0){
        contador += 1
    } 
    if (valor2 %2 != 0){
        contador += 1
    } 
    if (valor3 %2 != 0){
        contador += 1
    } 
    if (valor4 %2 != 0){
        contador += 1
    } 
    if (valor5 %2 != 0){
        contador += 1
    } 
    console.log(contador+ " valor(es) impar(es)")
    break
}

for (let contador = 0; contador < 5; contador += 1) {
    if (valor1 > 0){
        contador += 1
    } 
    if (valor2 > 0){
        contador += 1
    } 
    if (valor3 > 0){
        contador += 1
    } 
    if (valor4 > 0){
        contador += 1
    } 
    if (valor5 > 0){
        contador += 1
    } 
    console.log(contador+ " valor(es) positivo(s)")
    break
}

for (let contador = 0; contador < 5; contador += 1) {
    if (valor1 < 0){
        contador += 1
    } 
    if (valor2 < 0){
        contador += 1
    } 
    if (valor3 < 0){
        contador += 1
    } 
    if (valor4 < 0){
        contador += 1
    } 
    if (valor5 < 0){
        contador += 1
    } 
    console.log(contador+ " valor(es) negativo(s)")
    break
}
