const _ = require("lodash");
const axios = require("axios");

const getAyah = async () => {
  const {
    data: {
      data: {
        text,
        surah: { name, numberOfAyahs },
        numberInSurah,
        juz,
        page,
      },
    },
  } = await axios.get(`${process.env.API_END_POINT}/${_.random(1, 6236)}`);

  const ayahData = {
    ayahText: text,
    surahName: name,
    ayahsNumber: numberOfAyahs,
    ayahNumber: numberInSurah,
    juzNumber: juz,
    pageNumber: page,
  };

  return ayahData;
};

module.exports = getAyah;
