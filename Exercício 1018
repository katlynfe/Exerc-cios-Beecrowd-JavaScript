/*
Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines[0]);
console.log(valor)

let nota100 = parseInt(valor/100);
console.log(nota100+ " nota(s) de R$ 100,00")

let nota50 = parseInt((valor - nota100 * 100)/50);
console.log(nota50+ " nota(s) de R$ 50,00")

let nota20 = parseInt((valor - nota100*100 - nota50*50)/20);
console.log(nota20+ " nota(s) de R$ 20,00")

let nota10 = parseInt((valor - nota100*100 - nota50*50 - nota20*20)/10);
console.log(nota10+ " nota(s) de R$ 10,00")

let nota5 = parseInt((valor - nota100*100 - nota50*50 - nota20*20 - nota10*10)/5);
console.log(nota5+ " nota(s) de R$ 5,00")

let nota2 = parseInt((valor - nota100*100 - nota50*50 - nota20*20 - nota10*10 - nota5*5)/2);
console.log(nota2+ " nota(s) de R$ 2,00")

let nota1 = parseInt((valor - nota100*100 - nota50*50 - nota20*20 - nota10*10 - nota5*5 - nota2*2));
console.log(nota1+ " nota(s) de R$ 1,00")

