const start = async (ctx) => {
  await ctx.reply("Ａｙａｈ Ｂｏｔ أهلا بك في");
  await ctx.reply("لتحصل علي أيه اكتب كلمة: (آية)");
  await ctx.reply("لتحصل علي المساعدة اكتب الأمر (/help)");
};

const help = (ctx) => {
  ctx.reply("هذا البوت هوعبارة عن بوت يعطي لك أيه عشوائية من القرأن الكريم.");
};

module.exports = {
  start,
  help,
};
