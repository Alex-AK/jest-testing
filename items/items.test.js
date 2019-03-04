const { success, fail, repair } = require('./items');

const sword = {
  name: 'Iron Sword',
  type: 'Weapon',
  durability: 10,
  enhancement: '[0]'
};

const armor = {
  name: 'Iron Shield',
  type: 'Armor',
  durability: 100,
  enhancement: '[0]'
};

const enhancementLevel = [
  '[+1]',
  '[+2]',
  '[+3]',
  '[+4]',
  '[+5]',
  '[+6]',
  '[+7]',
  '[+8]',
  '[+9]',
  '[+10]',
  '[+11]',
  '[+12]',
  '[+13]',
  '[+14]',
  '[+15]',
  '[PRI]',
  '[DUO]',
  '[TRI]',
  '[TED]',
  '[PEN]'
];

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

// repair - accepts item object, returns new item object with durability restored to 100
describe('Take item in, return object with durability back to 100.', () => {
  it('repair()', () => {
    expect(repair(sword)).toMatchObject({
      ...sword,
      durability: 100
    });
  });

  // it('', () => {
  //   expect();
  // });

  // test cases
  // item is already 100
  // no item received
  // no durability key: value in object
  // receives array, undefined,
});

// success - accepts item object, returns new item object modified according to success rules
// describe('Take item in, return item with enhancement level + 1', () => {
//   it('success()', () => {
//     expect(enhancer.success(item, enhancementLevel)).toBe(item.enhancement);
//   });

//   it('', () => {
//     expect();
//   });
// });

// fail - accepts item object, returns new item object modified according to fail rules
// The durability of an item cannot be less than 20 when the item's enhancement level is between +0 /and +14.
// The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.
// describe('Take item in, return object with durability back to 100.', () => {
//   it('fail()', () => {});

//   it('', () => {
//     expect();
//   });
// });
