/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const linha1 = 'Oi, meu nome é ';
const linha2 = '!\nTenho ';
const linha = ' anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!';

const vqv = (str, numero) => {
  if (!str || !numero) {
    return undefined;
  } return `${linha1 + str + linha2 + numero + linha}`;
};
console.log(vqv('Tunico', 30));
module.exports = vqv;