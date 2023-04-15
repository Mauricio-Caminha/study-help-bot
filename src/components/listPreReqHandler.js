const { EmbedBuilder } = require('discord.js');

const preReqTips = {
  'tecnicas de programacao': 'Lógica de Programação',
  'banco de dados': 'Lógica de Programação',
  'cálculo aplicado - uma variável': 'Laboratório de Matemática e Física',
  'estrutura de dados': 'Lógica de Programação, Técnicas de Programação',
  'programacao orientada a objetos': 'Lógica de Programação, Técnicas de Programação',
  'álgebra linear computacional': 'Laboratório de Matemática e Física, Cálculo aplicado - uma variável',
  'analise de algoritmos': 'Estrutura de dados, Algoritimos de Ordenação e Técnicas de Armazenamento',
  'práticas de engenharia de software': 'Engenharia de Software',
  'computacao para dispositivos moveis': 'Orientação Objeto, Técnicas de Programação, Algoritimos de Ordenação e Técnicas de Armazenamento',
};

module.exports = {

  sendResponsePreReq(selected) {
    const response = preReqTips.hasOwnProperty(selected);
    if (response) {
      return preReqTips[selected];
    } else {
      return 'Desculpe, não sei os pre-requisitos para essa disciplina.';
    }
  },

  buildResponseFromSelectedStringFromMenu(selected, response) {
    const commandsEmbed = new EmbedBuilder()
      .setColor('Red')
      .setTitle(`Pre-Requisitos 📖\n\ ${selected.toUpperCase()} `)
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: response, value: ' ' },
        { name: '\u200B', value: '\u200B' },
      )
      .setTimestamp()
      .setFooter({ text: 'Bons estudos!', iconURL: 'https://www.uniritter.edu.br/wp-content/uploads/2022/06/imagem_2022-06-01_145619421-removebg-preview.png' });

    return commandsEmbed;
  },
}