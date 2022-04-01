const start = async (ctx) => {
  await ctx.reply("(Ayah Bot) أهلا بك في");
  await ctx.telegram.sendMessage(
    ctx.chat.id,
    "لتحصل علي أيه اضغط علي الزر الظاهر أمامك أو اكتب كلمة (آية))",
    keyboardBtns
  );
};

module.exports = {
  start,
};
