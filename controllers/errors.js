const { Markup } = require("telegraf");
const keyboardBtns = Markup.keyboard([Markup.button.callback("آية", "آية")]);

const sticker = (ctx) => ctx.telegram.sendMessage(ctx.chat.id, keyboardBtns);

const message = (ctx) =>
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "أضغط علي الزر لتحصل علي أية عشوائية",
    keyboardBtns
  );

module.exports = {
  sticker,
  message,
};
