const fs             = require("fs");
const path           = require("path");
const { NlpManager } = require("node-nlp");
const trainingSet    = require("./training-set");
const manager        = new NlpManager({ languages: ["en"] });

for (const set of trainingSet) {
 manager.addDocument("en", set.sentence, set.domain);
}

const process = async (message) => {

  const modelFile = path.join(__dirname, "/../../model.nlp");

  if (fs.existsSync(modelFile)) {
    await manager.load(modelFile);
  } else {
    await manager.train();
    manager.save();
  }

  return manager.process('en', message);
};

module.exports = {
  process
};
