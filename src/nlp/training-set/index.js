const release = require("./release");
const reads   = require("./countReads");

module.exports = [
  ...release,
  ...reads
];
