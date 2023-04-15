const { buildResponseFromSelectButton, sendResponse } = require("./studyOptimizationHandler");
const { buildResponseFromSelectedStringFromMenu, sendResponsePreReq } = require("./listPreReqHandler");

module.exports = {

  async eventHandler(interaction) {

    if (interaction.isStringSelectMenu()) {
      const selected = interaction.values[0];
      console.log(interaction)
      const response = sendResponsePreReq(selected);
      const selectStringEmbed = buildResponseFromSelectedStringFromMenu(selected, response);

      try {
        await interaction.reply({ embeds: [selectStringEmbed] });
      } catch (error) {
        console.error(error);
        await interaction.reply('Error to execute this command!');
      }

    }

    if (interaction.isButton()) {
      const question = interaction.customId;
      const response = sendResponse(question);
      const buttonEmbed = buildResponseFromSelectButton(question, response);

      try {
        await interaction.reply({ embeds: [buttonEmbed] });
      } catch (error) {
        console.error(error);
        await interaction.reply('Error to execute this command!');
      }
    }

    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

      try {
        await command.execute(interaction);

      } catch (error) {
        console.error(error);
        await interaction.reply('Error to execute this command!');
      }
    }
  }
}
