const { EmbedBuilder } = require('discord.js');

const studyOptimizationTips = {
  'Planejamento e organização': 'É importante ter um plano claro do que precisa ser estudado e em que ordem. Organize seu tempo e crie um cronograma para ajudar a garantir que você esteja estudando regularmente e fazendo progresso constante. Além disso, manter seus arquivos e anotações organizados pode economizar muito tempo ao revisar o material posteriormente.',
  'Prática regular': 'Como em qualquer habilidade, a prática é essencial para se tornar proficiente em TI. Procure oportunidades para praticar o que está aprendendo, seja em projetos pessoais ou em atividades acadêmicas. Quanto mais você pratica, mais rápido se sentirá confortável com o material.',
  'Recursos e ferramentas online': 'Há uma variedade de recursos disponíveis online que podem ajudar a complementar seus estudos em TI. Isso pode incluir cursos online, tutoriais em vídeo, fóruns de discussão ou plataformas de código aberto. Além disso, muitas ferramentas úteis, como editores de código, estão disponíveis gratuitamente na internet.',
  'Trabalho em equipe': 'Trabalhar em equipe pode ajudar a melhorar suas habilidades de comunicação e a entender diferentes perspectivas. Além disso, pode ser uma ótima oportunidade para aprender com outras pessoas, compartilhar conhecimento e dividir a carga de trabalho. Encontrar um grupo de estudo ou se envolver em projetos de equipe pode ajudar a otimizar seu estudo em TI.',
  'Mantenha-se atualizado': 'A tecnologia muda rapidamente, e é importante se manter atualizado com as últimas tendências e ferramentas em TI. Isso pode envolver seguir blogs, participar de eventos, ler artigos em revistas especializadas e se envolver em grupos de usuários locais. Manter-se atualizado ajudará você a entender como as tecnologias estão evoluindo e como elas podem ser aplicadas em seu próprio trabalho.'
};

module.exports = {
 
  sendResponse(question) {
    const response = studyOptimizationTips.hasOwnProperty(question);
    if (response) {
      return studyOptimizationTips[question];
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