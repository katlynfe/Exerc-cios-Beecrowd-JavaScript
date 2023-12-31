/*
A Federação Gaúcha de Futebol contratou você para escrever um programa para fazer uma estatística do resultado de vários GRENAIS. Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um GRENAL. Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta. Se a resposta for 1, o algoritmo deve ser executado novamente solicitando o número de gols marcados pelos times em uma nova partida, caso contrário deve ser encerrado imprimindo:

- Quantos GRENAIS fizeram parte da estatística.
- O número de vitórias do Inter.
- O número de vitórias do Grêmio.
- O número de Empates.
- Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor", caso termine empatado).

Entrada
O arquivo de entrada contém 2 valores inteiros, correspondentes aos gols marcados pelo Inter e pelo Grêmio respectivamente. Em seguida háverá um inteiro (1 ou 2), correspondente à repetição do programa.

Saída
Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". Quando o algoritmo for encerrado devem ser mostradas as estatísticas conforme a descrição apresentada acima. Obs: a palavra "Gremio" deve ser impressa sem acento, conforme o exemplo abaixo.
*/



const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');


let vitoriaInter = 0
let vitoriaGremio = 0
let empate = 0

for (let i = 0; i < lines.length; i = i + 2) {
    let line = lines[i].split(" ")
    let Inter = Number(line[0])
    let Gremio = Number(line[1])

    if (Inter > Gremio){
        vitoriaInter++
    } else if (Gremio > Inter){
        vitoriaGremio++
    } else if (Inter == Gremio){
        empate++
    }
    
}


let grenais = 0
console.log('Novo grenal (1-sim 2-nao)')
grenais++

for (let j = 1; j < lines.length; j = j + 2) {
    let line0 = Number(lines[j])

   if (line0 == 1) {
        console.log('Novo grenal (1-sim 2-nao)')
        grenais++
    }
}


console.log(grenais + " grenais")
console.log('Inter:' + vitoriaInter)
console.log('Gremio:' + vitoriaGremio)
console.log('Empates:' + empate)

if (vitoriaGremio > vitoriaInter){
    console.log('Gremio venceu mais')
} else if (vitoriaInter > vitoriaGremio){
    console.log('Inter venceu mais')
} else if (vitoriaGremio == vitoriaInter){
    console.log("Nao houve vencedor")
}
