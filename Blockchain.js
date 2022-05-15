const Block = require('./Block.js');

class Blockchain{
  constructor(){

    this.chain = [Block.genesis()];
  }

  addBlock(data){
    const lastBlock = this.chain[this.chain.length-1];
    const block = Block.mineBlock(lastBlock, data);
    this.chain.push(block);
    
    return block;
  }

  isValidChain() {
    if (JSON.stringify(this.chain[0]) !== JSON.stringify(Block.genesis())) return false;

    for (let i = 1; i < this.chain.length; i++) {
      const block = this.chain[i];
      const lastBlock = this.chain[i-1];

      if (block.lastHash !== lastBlock.hash || block.hash !== Block.blockHash(block)) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;