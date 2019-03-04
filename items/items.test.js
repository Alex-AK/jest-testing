const { enhancer } = require('./items');

// general format of a test
describe('add()', () => {
  it('description of check here', () => {
    // insert assertion then use a matcher
  });
});

// USEFUL MATCHES
/*
  .toBe
  .toEqual
  .not
  .toBeCloseTo
  .toMatch
  .toContain
  .toHaveLength
  .arrayContaining
  .stringContaining
*/

// MVP
// enhancer object has three function - success, fail, repair

const item = {
  name: 'Iron Sword',
  type: 'Weapon',
  durability: 10,
  enhancement: '+4'
};

// repair - accepts item object, returns new item object with durability restored to 100
describe('Take item in, return object with durability back to 100.', () => {
  it('repair()', () => {
    expect(repair(item.durability)).toBe(100);
  });

  it('', () => {
    expect();
  });

  // test cases
  // item is already 100
  // no item received
  // no durability key: value in object
  // receives array, undefined,
});

// success - accepts item object, returns new item object modified according to success rules
describe('Take item in, return item with enhancement level + 1', () => {
  it('enhance()', () => {
    expect(repair(item.enhancement)).toBe(item.enhancement + 1);
  });

  it('', () => {
    expect();
  });
});

// fail - accepts item object, returns new item object modified according to fail rules
// The durability of an item cannot be less than 20 when the item's enhancement level is between +0 /and +14.
// The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.
describe('Take item in, return object with durability back to 100.', () => {
  it('fail()', () => {});

  it('', () => {
    expect();
  });
});
