require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const commandsController = require("./controllers/commands");
const replysController = require("./controllers/replys");
const errorsController = require("./controllers/errors");

const { Telegraf } = require("telegraf");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let bot;
const port = process.env.PORT || 3000;
bot = new Telegraf(process.env.BOT_TOKEN);
// if (process.env.NODE_ENV === "production") {
//   bot = new TelegramBot(process.env.BOT_TOKEN).listen(port);
//   bot.setWebHook(process.env.HEROKU_URL + process.env.BOT_TOKEN);
// } else {
//   bot = new Telegraf(process.env.BOT_TOKEN);
// }

app.use(bot.webhookCallback(process.env.BOT_TOKEN));
bot.telegram.setWebhook(process.env.HEROKU_URL + process.env.BOT_TOKEN);

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

app.listen(port);
