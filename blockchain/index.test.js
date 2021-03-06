const Blockchain = require('./index.js');
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
    expect(Blockchain.isValidChain(bc.chain)).toBe(true);
  });

  it("Invalidates a chain with a corrupted block", () => {
    bc.chain[0].data = "testing again";
    expect(Blockchain.isValidChain(bc.chain)).toBe(false);
  });

  it("Invalidades a chain with any block corrupted", () => {
    bc.addBlock("123");
    bc.chain[1].data = "12345";

    expect(Blockchain.isValidChain(bc.chain)).toBe(false);
  });

  it('Replace a chain with a valid chain', () => {
    bc2 = new Blockchain;
    bc2.addBlock("Alow");
    bc.replaceChain(bc2.chain);


    expect(bc).toEqual(bc2);
  });

  it("Doens't replace the chain with one less or equal length", () => {
    bc2 = new Blockchain;
    bc2.addBlock("ola");
    bc2.replaceChain(bc.chain);

    expect(bc).not.toEqual(bc2);
  });
})