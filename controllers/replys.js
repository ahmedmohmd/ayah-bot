const getAyah = require("../helpers/functions");

const ayah = async (ctx) => {
  const {
    ayahText,
    surahName,
    ayahsNumber,
    ayahNumber,
    juzNumber,
    pageNumber,
  } = await getAyah();

  await ctx.reply(ayahText);
  ctx.reply(surahName);
  ctx.reply(`أية رقم: ${ayahNumber}`);
  ctx.reply(`عدد أياتها: ${ayahsNumber}`);
  ctx.reply(`الجزء: ${juzNumber}`);
  ctx.reply(`رقم الصفحة: ${pageNumber}`);
};

module.exports = {
  ayah,
};
