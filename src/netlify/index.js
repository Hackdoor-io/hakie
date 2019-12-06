const axios = require("axios");
require("dotenv").config();

const triggerBuild = (msg) =>
  axios.post(`https://api.netlify.com/build_hooks/${process.env.NETLIFY_BUILD_HOOK_ID}`)
    .then(() => msg.reply(`Just triggered a new build for **hackdoor.io**`))
    .catch(() => msg.reply(`There was an error while triggering a new build for **hackdoor.io**`));

module.exports = {
  triggerBuild
};
