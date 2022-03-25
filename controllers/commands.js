const start = (ctx) => {
  ctx.reply("Ａｙａｈ Ｂｏｔ أهلا بك في");
  ctx.reply("لتحصل علي أيه اكتب كلمة: (آية)");
  ctx.reply("لتحصل علي المساعدة اكتب الأمر (/help)");
};

const help = (ctx) => {
  ctx.reply("هذا البوت هوعبارة عن بوت يعطي لك أيه عشوائية من القرأن الكريم.");
};

module.exports = {
  start,
  help,
};
