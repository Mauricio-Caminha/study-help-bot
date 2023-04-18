const fs = require('fs');

const knowledgeBaseJSON = fs.readFileSync('./src/repositories/knowledgeBase.json', 'utf-8');
const knowledgeBase = JSON.parse(knowledgeBaseJSON);

module.exports = {

  verifyWhoSendAndSendAnswerForQuestion(message) {
    if (!message.author.bot) {
      if (message.content) {
        if (message.content.includes('<@1096534059469000724>')) {
          const question = message.content.slice(23);
          const response = knowledgeBase.hasOwnProperty(question);
          if (response) {
            return knowledgeBase[question];
          } else {
            return 'Desculpe, ainda não sei a resposta para está pergunta.';
          }
        }
      } else {
        console.log('Mensagem vazia recebida.');
      }
    }
  },
}