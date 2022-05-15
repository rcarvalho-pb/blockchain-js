const Block = require("./Block");
const Blockchain = require("./Blockchain");

bc = new Blockchain;
bc.addBlock("Lebron")
bc.chain[1] = "kobe"

console.log(bc.isValidChain())
