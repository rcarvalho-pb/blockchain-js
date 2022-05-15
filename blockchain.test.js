const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
  let bc, bc2;
  beforeEach(() => {
    bc = new Blockchain;
    bc2 = new Blockchain;
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
    bc2.addBlock("testing");
    expect(bc.isValidChain(bc2.chain)).toBe(true);
  });

  it("Invalidates a chain with a corrupted block", () => {
    bc2.chain[0].data = "testing again";
    expect(bc.isValidChain(bc2.chain)).toBe(false);
  });

  it("Invalidades a chain with any block corrupted", () => {
    bc2.addBlock("Anakin");
    bc2.chain[1].data = "Luke";

    expect(bc.isValidChain(bc2)).toBe(false);
  });
})