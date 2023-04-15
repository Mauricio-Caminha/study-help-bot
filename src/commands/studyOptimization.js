const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('otimizar-estudos')
    .setDescription('Dá dicas para otimização da rotina de estudos'),

  async execute(interaction) {
    const target = interaction.user;

    const planningButton = new ButtonBuilder()
      .setCustomId('Planejamento e organização')
      .setLabel('Planejamento e organização')
      .setStyle(ButtonStyle.Success);

    const practiceButton = new ButtonBuilder()
      .setCustomId('Prática regular')
      .setLabel('Prática regular')
      .setStyle(ButtonStyle.Success);

    const resourcesButton = new ButtonBuilder()
      .setCustomId('Recursos e ferramentas online')
      .setLabel('Recursos e ferramentas online')
      .setStyle(ButtonStyle.Success);

    const temWorkButton = new ButtonBuilder()
      .setCustomId('Trabalho em equipe')
      .setLabel('Trabalho em equipe')
      .setStyle(ButtonStyle.Success);

    const keepUpToDateButton = new ButtonBuilder()
      .setCustomId('Mantenha-se atualizado')
      .setLabel('Mantenha-se atualizado')
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder()
      .addComponents(planningButton, practiceButton, resourcesButton, temWorkButton, keepUpToDateButton);

    await interaction.reply({
      content: `${target.username}, abaixo tenho algumas sugestões de como otimizar seus estudos:`,
      components: [row],
    });
  }
}
