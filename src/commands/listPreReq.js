const { ActionRowBuilder, SlashCommandBuilder, StringSelectMenuOptionBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('listar-pre-requisitos')
    .setDescription('Lista os pre-requisitos da disciplina escolhida'),

  async execute(interaction) {
    const target = interaction.user;

    const disciplinaUm = new StringSelectMenuOptionBuilder()
      .setLabel('Tecnicas de programacao')
      .setDescription('2º Semestre')
      .setValue('tecnicas de programacao')

    const disciplinaDois = new StringSelectMenuOptionBuilder()
      .setLabel('Banco de dados')
      .setDescription('3º Semestre')
      .setValue('banco de dados')

    const disciplinaTrês = new StringSelectMenuOptionBuilder()
      .setLabel('Cálculo aplicado - uma variável')
      .setDescription('3º Semestre')
      .setValue('cálculo aplicado - uma variável')

    const disciplinaQuatro = new StringSelectMenuOptionBuilder()
      .setLabel('Estrutura de dados')
      .setDescription('3º Semestre')
      .setValue('estrutura de dados')

    const disciplinaCinco = new StringSelectMenuOptionBuilder()
      .setLabel('Analise de algoritmos')
      .setDescription('5º Semestre')
      .setValue('analise de algoritmos')

    const disciplinaSeis = new StringSelectMenuOptionBuilder()
      .setLabel('Computacao para dispositivos moveis')
      .setDescription('6º Semestre')
      .setValue('computacao para dispositivos moveis')

    const select = new StringSelectMenuBuilder()
      .setCustomId('starter')
      .setPlaceholder('Nenhuma disciplina selecionada!')
      .addOptions(disciplinaUm, disciplinaDois, disciplinaTrês, disciplinaQuatro, disciplinaCinco, disciplinaSeis);

    const row = new ActionRowBuilder()
      .addComponents(select);

    await interaction.reply({
      content: `${target.username}, selecione a disciplina na lista abaixo:`,
      components: [row],
    });
  },
}