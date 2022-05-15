const Blockchain = require('./Blockchain.js');
const Block = require('./Block.js');

describe('Blockchain', () => {
  let bc;
  beforeEach(() => {
    bc = new Blockchain;
  });

  it('Create array with genesis first', () => {
    expect(bc.chain[0]).toEqual(Block.genesis());
  });

  it('adds new block to chain', () => {
    let data = "Luke, I'm your father!"
    bc.addBlock(data);
    expect(bc.chain[bc.chain.length-1].data).toEqual(data);
  });

  it('Validates a valid chain', () => {
    bc.addBlock("testing");
    expect(bc.isValidChain()).toBe(true);
  });

  it("Invalidates a chain with a corrupted block", () => {
    bc.chain[0].data = "testing again";
    expect(bc.isValidChain()).toBe(false);
  });

  it("Invalidades a chain with any block corrupted", () => {
    bc.addBlock("123");
    bc.chain[1].data = "12345";

    expect(bc.isValidChain()).toBe(false);
  });
})