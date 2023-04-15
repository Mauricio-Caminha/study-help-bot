const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

dotenv.config();
const { TOKEN, APPLICATION_ID, GUILD_ID } = process.env;

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const commands = [];

commandFiles.forEach(file => {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
});

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log(`Reseting ${commands.length} commands...`);
  
    const data = await rest.put(
      Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID),
      { body: commands }
    );

    console.log('Commands registered successfully!')
  } catch (error) {
    console.error(error);
  }
})();