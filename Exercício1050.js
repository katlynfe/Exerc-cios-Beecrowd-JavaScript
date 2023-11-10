/*
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:




Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada
A entrada consiste de um único valor inteiro.

Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

let ddd = parseInt(lines[0]);

if (ddd == 61){
    console.log("Brasilia")
} else if (ddd == 71){
    console.log("Salvador")
} else if (ddd == 11){
    console.log("Sao Paulo")
} else if (ddd == 21){
    console.log("Rio de Janeiro")
} else if (ddd == 32){
    console.log("Juiz de Fora")
} else if (ddd == 19){
    console.log("Campinas")
} else if (ddd == 27){
    console.log("Vitoria")
} else if (ddd == 31){
    console.log("Belo Horizonte")
} else {
    console.log("DDD nao cadastrado")
}
