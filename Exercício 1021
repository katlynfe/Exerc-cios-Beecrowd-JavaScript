/*
Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

Saída
Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

Obs: Utilize ponto (.) para separar a parte decimal.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines[0]);

console.log("NOTAS:")

let nota100 = parseInt(valor / 100)
let nota50 = parseInt((valor - nota100*100)/50)
let nota20 = parseInt((valor - nota100*100 - nota50*50)/20)
let nota10 = parseInt((valor - nota100*100 - nota50*50 - nota20*20)/10)
let nota5 = parseInt((valor - nota100*100 - nota50*50 - nota20*20 - nota10*10)/5)
let nota2 = parseInt((valor - nota100*100 - nota50*50 - nota20*20 - nota10*10 - nota5*5)/2)

console.log(nota100+ " nota(s) de R$ 100.00")
console.log(nota50+ " nota(s) de R$ 50.00")
console.log(nota20+ " nota(s) de R$ 20.00")
console.log(nota10+ " nota(s) de R$ 10.00")
console.log(nota5+ " nota(s) de R$ 5.00")
console.log(nota2+ " nota(s) de R$ 2.00")

console.log("MOEDAS:")
let moedas = valor - parseInt(valor)
let moeda1 = parseInt(valor - nota100*100 - nota50*50 - nota20*20 - nota10*10 - nota5*5 - nota2*2)
let moeda05 = parseInt(moedas/0.5)
let moeda025 = parseInt((moedas - moeda05*0.5)/0.25)
let moeda01 = parseInt((moedas - moeda05*0.5 - moeda025*0.25)/0.1)
let moeda005 = parseInt((moedas - moeda05*0.5 - moeda025*0.25 - moeda01*0.1)/0.05)
let moeda001 = parseInt((moedas - moeda05*0.5 - moeda025*0.25 - moeda01*0.1 - moeda005*0.05)/0.01*1000)

console.log(moeda1+ " moeda(s) de R$ 1.00")
console.log(moeda05+ " moeda(s) de R$ 0.50")
console.log(moeda025+ " moeda(s) de R$ 0.25")
console.log(moeda01+ " moeda(s) de R$ 0.10")
console.log(moeda005+ " moeda(s) de R$ 0.05")
console.log((moeda001/1000).toFixed(0)+ " moeda(s) de R$ 0.01")
