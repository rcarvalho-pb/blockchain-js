const Block = require("./blockchain/Block.js");
const Blockchain = require("./Blockchain.js");

bc = new Blockchain;
console.log(bc)
bc2 = new Blockchain;
bc2.addBlock("Oie");
bc2.addBlock("Tchau")
bc.replaceChain(bc2.chain);

console.log(bc.chain)
console.log(bc2.chain)
