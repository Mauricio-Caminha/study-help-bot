const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('node:fs');
const path = require('node:path');

const { eventHandler, messageEventHandler } = require('./src/components/eventHandler');

dotenv.config();
const { TOKEN } = process.env;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ]
});
client.commands = new Collection();

const commandsPath = path.join(__dirname, '/src/commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

commandFiles.forEach(file => {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  if ('data' in command && 'execute' in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(`Este comando no caminho ${filePath} não possui 'data' ou 'execute' nos seus atributos!`);
  }
});

client.once(Events.ClientReady, c => {
  console.log(`Pronto! Autenticado como ${c.user.tag}`);
});

client.on('messageCreate', (message) => {
  messageEventHandler(message);
});

client.on(Events.InteractionCreate, async (interaction) => {
  eventHandler(interaction);
});

client.login(TOKEN);