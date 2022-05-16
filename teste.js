const Blockchain = require("./blockchain");
const Block = require("./Block");

const bc = new Blockchain();
const block = Block.genesis();

console.log(block);
