const Block = require('./block');

describe('Block', () => {
let data, lastBlock, block;

  beforeEach(() => {
    data = 'index.html';
    lastBlock = Block.genesis();
    block = Block.mineBlock(lastBlock, data);
  });

  it('Sets the `data` to match the input', () => {
    expect(block.data).toEqual(data);
  });

  it('Sets the `LastHash` to match the Hash of the last Block', () => {
    expect(block.lastHash).toEqual(lastBlock.hash);
  });
});