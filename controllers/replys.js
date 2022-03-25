const getAyah = require("../helpers/functions");

const ayah = async (ctx) => {
  try {
    const {
      ayahText,
      surahName,
      ayahsNumber,
      ayahNumber,
      juzNumber,
      pageNumber,
    } = await getAyah();

    await ctx.replyWithHTML(`
    <strong>${ayahText}</strong>

    [${surahName}] - أيه رقم: ${ayahNumber} - عدد أياتها: ${ayahsNumber} - الجزء: ${juzNumber} - رقم الصفحة: ${pageNumber}
    
  
    `);
    // await ctx.replyWithHTML(`<strong>${ayahText}</strong>`);
    // await ctx.reply(surahName);
    // await ctx.reply(`أية رقم: ${ayahNumber}`);
    // await ctx.reply(`عدد أياتها: ${ayahsNumber}`);
    // await ctx.reply(`الجزء: ${juzNumber}`);
    // await ctx.reply(`رقم الصفحة: ${pageNumber}`);
  } catch (error) {
    ctx.reply("هناك خطأ ما!");
  }
};

module.exports = {
  ayah,
};
