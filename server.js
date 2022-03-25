require("dotenv").config();
const express = require("express");
const { Telegraf } = require("telegraf");

const commandsController = require("./controllers/commands");
const replysController = require("./controllers/replys");
const errorsController = require("./controllers/errors");

const port = process.env.PORT || 3000;
const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.telegram.setWebhook(
//   "https://ayah-bot.herokuapp.com/" + process.env.BOT_TOKEN
// );

// if (process.env.NODE_ENV === "production") {
//   bot = new TelegramBot(process.env.BOT_TOKEN).listen(port);
//   bot.setWebHook(process.env.HEROKU_URL + process.env.BOT_TOKEN);
// } else {
//   bot = new Telegraf(process.env.BOT_TOKEN);
// }

// Commands
bot.start(commandsController.start);
bot.help(commandsController.help);

// Replys
bot.hears("آية", replysController.ayah);

// Errors
bot.on("sticker", errorsController.sticker);
bot.on("message", errorsController.message);

// bot.launch();

// // Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));

const app = express();
// app.use(bot.webhookCallback(process.env.BOT_TOKEN));
bot.launch({
  webhook: {
    domain: "https://ayah-bot.herokuapp.com/",
    port,
  },
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen();
