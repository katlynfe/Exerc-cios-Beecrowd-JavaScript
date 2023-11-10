/*
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.

Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.

Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).

Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);
let c = 0
let r = 0
let s = 0
let soma = 0
let perC = 0
let perR = 0
let perS = 0

for (let i = 1; i <= N; i++){
    let line0 = (lines[i]);
    vetor = line0.split(" ")

    if (vetor[1] == 'C' ){
        c += Number(vetor[0])
    } else if (vetor[1] == 'R'){
        r += Number(vetor[0])
    } else if (vetor[1] == 'S'){
        s += Number(vetor[0])
    }
    soma = c + r + s
    perC = (c/soma*100).toFixed(2)
    perR = (r/soma*100).toFixed(2)
    perS = (s/soma*100).toFixed(2)
}

console.log("Total: " + soma + " cobaias")
console.log("Total de coelhos: " +c)
console.log("Total de ratos: " +r)
console.log("Total de sapos: " +s)
console.log("Percentual de coelhos: " +perC+ " %")
console.log("Percentual de ratos: " +perR+ " %")
console.log("Percentual de sapos: " +perS+ " %")
