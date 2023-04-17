const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const commandsEmbed = new EmbedBuilder()
	.setColor('Red')
	.setTitle('Bem vindo ao StudyHelp 👋 ')
	.setURL('https://github.com/Mauricio-Caminha/study-help-bot.git')
	.setDescription('Desenvolvido para ajudar alunos calouros do curso de TI da uniRitter')
  .setThumbnail('https://www.uniritter.edu.br/wp-content/uploads/2022/06/imagem_2022-06-01_145619421-removebg-preview.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '/comandos', value: 'Lista os comandos disponíveis no StudyHelp'},
		{ name: '/listar-pre-requisitos', value: 'Lista os pre-requisitos da disciplina escolhida' },
		{ name: '/otimizar-estudos', value: 'Dá dicas para otimização da rotina de estudos'},
		{ name: '/plano-de-estudos', value: 'Recomenda conhecimentos básicos para cada disciplina do semestre escolhido'},
		{ name: '@StudyHelp', value: 'Marcar o bot e fazer uma pergunta, faz com que ele responda sugestões de estudos para o semestre escolhido e plataformas para estudo.'},
    { name: '\u200B', value: '\u200B' },
	)
	.setTimestamp()
	.setFooter({ text: 'Bons estudos!', iconURL: 'https://www.uniritter.edu.br/wp-content/uploads/2022/06/imagem_2022-06-01_145619421-removebg-preview.png' });

module.exports = {
  data: new SlashCommandBuilder()
    .setName('comandos')
    .setDescription('Mostra os comandos executaveis no bot'),

  async execute(interaction) {
    await interaction.reply({ embeds: [commandsEmbed] });
  }
}