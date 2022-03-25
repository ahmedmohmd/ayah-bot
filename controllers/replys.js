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
  } catch (error) {
    ctx.reply("هناك خطأ ما!");
  }
};

module.exports = {
  ayah,
};
