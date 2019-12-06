const Discord = require("discord.js");
const netlify = require("./src/netlify");
const strapi  = require("./src/strapi");
const nlp     = require("./src/nlp");
const hakie   = new Discord.Client();

require("dotenv").config();

hakie.on("message", async (msg) => {

  if (!/^Hakie,\s/i.test(msg.content)) {
    return;
  }

  const req            = await nlp.process(msg.content);
  const classification = req.classifications[0].intent;

  switch (classification) {
    case "article.reads":
      await strapi.getArticleReads(msg);
      break;
    case "release.build":
      await netlify.triggerBuild(msg);
      break;
    default:
      msg.reply(`I can't understand what you're saying!`);
  }

});

hakie.login(process.env.BOT_TOKEN);
