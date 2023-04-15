const { EmbedBuilder } = require('discord.js');

const preReqTips = {
  'tecnicas de programacao': 'aa',
  'banco de dados': 'bb',
  'cálculo aplicado - uma variável': 'cc',
  'estrutura de dados': 'dd',
  'programacao orientada a objetos': 'ee',
  'álgebra linear computacional': 'ff',
  'analise de algoritmos': 'gg',
  'práticas de engenharia de software': 'hh',
  'computacao para dispositivos moveis': 'ii',
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