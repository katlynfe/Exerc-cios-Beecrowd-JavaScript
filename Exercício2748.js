/*
O seu professor de programação gostaria de fazer uma tela com as seguintes características:

Ter 39 traços (-) na primeira linha;
Ter uma | embaixo do primeiro traço e do trigésimo nono traço da primeira linha, embaixo do 10 traço deve começar a escrever a palavra "Roberto" e o restante preencher no meio com espaço em branco;
Ter uma | embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
Ter uma | embaixo do primeiro traço e do trigésimo nono traço da primeira linha, embaixo do 10 traço deve começar a escrever o número "5786" e o restante preencher no meio com espaço em branco;
Repita o procedimento 3;
Ter uma | embaixo do primeiro traço e do trigésimo nono traço da primeira linha, embaixo do 10 traço deve começar a escrever a palavra "UNIFEI" e o restante preencher no meio com espaço em branco;
Repita o procedimento 1.
No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)
|        Roberto                      |
|                                     |
|        5786                         |
|                                     |
|        UNIFEI                       |
--------------------------------------- (39 traços)

Entrada
Não há.

Saída
A saída será impresso conforme a figura acima.
*/


const path = require('path');
const currentFile = path.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin
var input = require('fs').readFileSync(currentFile + '/dev/stdin', 'utf8');
var lines = input.split('\n');

function criarTela() {
    const linha1 = "-".repeat(39); // primeira linha com 39 traços
  
    const linha2 = `|${" ".repeat(8)}Roberto${" ".repeat(22)}|`; // segunda linha com "Roberto"
    const linha3 = `|${" ".repeat(37)}|`; // terceira linha em branco
  
    const linha4 = `|${" ".repeat(8)}5786${" ".repeat(25)}|`; // quarta linha com o número "5786"
    const linha5 = `|${" ".repeat(37)}|`; // quinta linha em branco
  
    const linha6 = `|${" ".repeat(8)}UNIFEI${" ".repeat(23)}|`; // sexta linha com "UNIFEI"
    const linha7 = linha1; // sétima linha igual à primeira linha
  
    const tela = `${linha1}\n${linha2}\n${linha3}\n${linha4}\n${linha5}\n${linha6}\n${linha7}`;
    console.log(tela);
  }
  
  // Chamar a função para criar a tela
  criarTela();
