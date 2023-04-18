const { EmbedBuilder } = require('discord.js');
const fs = require('fs');

const knowledgeBaseJSON = fs.readFileSync('./src/repositories/knowledgeBase.json', 'utf-8');
const knowledgeBase = JSON.parse(knowledgeBaseJSON);

module.exports = {
 
  sendResponse(question) {
    const response = knowledgeBase.hasOwnProperty(question);
    if (response) {
      return knowledgeBase[question];
    } else {
      return 'Desculpe, não sei a resposta para essa pergunta.';
    }
  },

  buildResponseFromSelectButton(question, response) {
    const commandsEmbed = new EmbedBuilder()
      .setColor('Red')
      .setTitle(`Dica de ${question} 📚`)
      .setThumbnail('https://www.uniritter.edu.br/wp-content/uploads/2022/06/imagem_2022-06-01_145619421-removebg-preview.png')
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: ' ', value: response },
        { name: '\u200B', value: '\u200B' },
      )
      .setTimestamp()
      .setFooter({ text: 'Bons estudos!', iconURL: 'https://www.uniritter.edu.br/wp-content/uploads/2022/06/imagem_2022-06-01_145619421-removebg-preview.png' });

      return commandsEmbed;
  },
}