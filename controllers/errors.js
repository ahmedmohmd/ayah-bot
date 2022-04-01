const { Markup } = require("telegraf");
const keyboardBtns = Markup.keyboard([Markup.button.callback("آية", "آية")]);

const sticker = (ctx) => ctx.telegram.sendMessage(ctx.chat.id, keyboardBtns);

const message = (ctx) =>
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "أضغط علي الزر أو اكتب (آية) لتحصل علي آية عشوائية",
    keyboardBtns
  );

module.exports = {
  sticker,
  message,
};
