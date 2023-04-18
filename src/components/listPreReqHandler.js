const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

const knowledgeBaseJSON = fs.readFileSync('./src/repositories/knowledgeBase.json', 'utf-8');
const knowledgeBase = JSON.parse(knowledgeBaseJSON);

module.exports = {

  sendResponsePreReq(selected) {
    const response = knowledgeBase.hasOwnProperty(selected);
    if (response) {
      return knowledgeBase[selected];
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