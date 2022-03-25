require("dotenv").config();

const commandsController = require("./controllers/commands");
const replysController = require("./controllers/replys");
const errorsController = require("./controllers/errors");

const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

// Commands
bot.start(commandsController.start);
bot.help(commandsController.help);

// Replys
bot.hears("آية", replysController.ayah);

// Errors
bot.on("sticker", errorsController.sticker);
bot.on("message", errorsController.message);

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
