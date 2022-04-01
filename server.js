require("dotenv").config();
const express = require("express");
const { Telegraf } = require("telegraf");

const commandsController = require("./controllers/commands");
const replysController = require("./controllers/replys");
const errorsController = require("./controllers/errors");

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
const port = process.env.PORT || 3000;

// Commands
bot.start(commandsController.start);

// Replys
bot.hears("آية", replysController.ayah);

// Errors
bot.on("sticker", errorsController.sticker);
bot.on("message", errorsController.message);

bot.launch({
  webhook: {
    domain: process.env.APP_URL,
    port,
  },
});

app.listen();
