const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc;
  beforeEach(() => {
    bc = new Blockchain;
  })

  it('Create array with genesis first', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  })

  it('adds new block to chain', () => {
    let data = "Luke, I'm your father!"
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  })
})