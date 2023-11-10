/*
Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido). O programa será encerrado quando o código informado for o número 4.

Entrada
A entrada contém apenas valores inteiros e positivos.

Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme exemplo.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let N = lines.length
let alcool = 0
let gasolina = 0
let diesel = 0

 for (let i = 0; i < N; i++){
    let tentativa = Number(parseInt(lines[i]));
    if (tentativa == 1){
        alcool++
    }
    if (tentativa == 2){
        gasolina++
    }
    if (tentativa == 3){
        diesel++
    }
    if (tentativa == 4){
        break
    }
}

console.log("MUITO OBRIGADO")
console.log("Alcool: " +alcool)
console.log("Gasolina: " +gasolina)
console.log("Diesel: " +diesel)
