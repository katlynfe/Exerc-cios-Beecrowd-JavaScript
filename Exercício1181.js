/*
Neste problema você deve ler um número, indicando uma linha da matriz na qual uma operação deve ser realizada, um caractere maiúsculo, indicando a operação que será realizada, e todos os elementos de uma matriz M[12][12]. Em seguida, calcule e mostre a soma ou a média dos elementos que estão na área verde da matriz, conforme for o caso. A imagem abaixo ilustra o caso da entrada do valor 2 para a linha da matriz, demonstrando os elementos que deverão ser considerados na operação.




Entrada
A primeira linha de entrada contem um número L (0 ≤ L ≤ 11) indicando a linha que será considerada para operação. A segunda linha de entrada contém um único caractere Maiúsculo T ('S' ou 'M'), indicando a operação (Soma ou Média) que deverá ser realizada com os elementos da matriz. Seguem os 144 valores de ponto flutuante que compõem a matriz, sendo que a mesma é preenchida linha por linha, da linha 0 até a linha 11, sempre da esquerda para a direita.

Saída
Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto decimal.
*/


const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


const tamanhoMatriz = 12

let linhaCalcular = lines[0]
let operacao = lines[1]

let matriz = []

cont = 2

for(let linha = 0; linha < tamanhoMatriz; linha++){ //linhas
    let colunas = []
    for(let coluna = 0; coluna < tamanhoMatriz; coluna++){ //colunas
        colunas[coluna] = Number(lines[cont])
        cont++
    }

    matriz[linha] = colunas

}

switch (operacao) {
    case 'S':
        console.log( calcularSoma(matriz,linhaCalcular,tamanhoMatriz).toFixed(1) )
        break;
    case 'M':
        console.log( calcularMedia(matriz, linhaCalcular).toFixed(1) )
        break;
    
}

function calcularSoma(matriz, linha){
    let soma = 0
    for(let coluna = 0; coluna < matriz.length; coluna++){
        soma = soma + matriz[linha][coluna]
        //soma += matriz[linha][coluna]
    }
    return soma

}

function calcularMedia(matriz, linha){
    let media = (calcularSoma(matriz, linha) / 12)
    return media
}
