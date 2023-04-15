const { buildResponseFromSelectButton, sendResponse } = require("./studyOptimizationHandler");

module.exports = {

  async eventHandler(interaction) {

    if(interaction.isButton()) {
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

      if (!command) {
        console.log('Command not found!');
        return;
      }

      try {
        await command.execute(interaction);

      } catch (error) {
        console.error(error);
        await interaction.reply('Error to execute this command!');
      }
    }
  }
}
