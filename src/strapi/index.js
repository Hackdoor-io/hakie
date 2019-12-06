const axios = require("axios");

require("dotenv").config();

const extractId = (msg) => msg.match(/\d+/)[0];

const getArticleReads = async (msg) => {
  const id   = extractId(msg.content);

  try {
    const res  = await axios.get(`${process.env.API_ENDPOINT}/articles/${id}`);
    const data = res.data;
    msg.reply(`The article **${data.title}** has **${data.articleReads}** reads.`);
  } catch (err) {
    msg.reply(`An error occurred while counting reads for article **${id}**.`);
  }

};

module.exports = {
  getArticleReads
};
