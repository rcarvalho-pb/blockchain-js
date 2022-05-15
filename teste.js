const Block = require("./block");
const Blockchain = require("./blockchain");

const block = Block.mineBlock(Block.genesis(), "Alow");

const chain = [Block.genesis(), block];

if(JSON.stringify(chain[0] === JSON.stringify(Block.genesis()))) console.log("oka")
else console.log("Wrong!!")