const { success, fail, repair } = require('./items');

const sword = {
  name: 'Iron Sword',
  type: 'Weapon',
  durability: 85,
  enhancement: 11
};

const armor = {
  name: 'Iron Shield',
  displayName: 'Iron Shield',
  type: 'Armor',
  durability: 100,
  enhancement: 0
};

const level = {
  1: '[+1]',
  2: '[+2]',
  3: '[+3]',
  4: '[+4]',
  5: '[+5]',
  6: '[+6]',
  7: '[+7]',
  8: '[+8]',
  9: '[+9]',
  10: '[+10]',
  11: '[+11]',
  12: '[+12]',
  13: '[+13]',
  14: '[+14]',
  15: '[+15]',
  16: '[PRI]',
  17: '[DUO]',
  18: '[TRI]',
  19: '[TET]',
  20: '[PEN]'
};

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
describe('repair()', () => {
  it('Take item object in, return object with durability back to 100.', () => {
    expect(repair(sword)).toMatchObject({
      ...sword,
      durability: 100
    });
  });

  it('Should return null when argument is invalid', () => {
    expect(repair()).toBeNull();
    expect(repair(null)).toBeNull();
    expect(repair(undefined)).toBeNull();
    expect(repair([])).toBeNull();
    expect(repair('string')).toBeNull();
    expect(repair(1)).toBeNull();
  });

  // test cases
  // item is already 100
  // no item received
  // no durability key: value in object
  // receives array, undefined,
});

// success - accepts item object, returns new item object modified according to success rules
// describe('success()', () => {
//   it('Take item in, return item with enhancement level + 1 and change display name accordingly', () => {
//     expect(success(sword, level)).toMatchObject({
//       ...sword,
//       enhancement: sword.enhancement + 1
//     });
//   });

// it('Should return null when argument is invalid', () => {
//   expect(repair()).toBeNull();
//   expect(repair(null)).toBeNull();
//   expect(repair(undefined)).toBeNull();
//   expect(repair([])).toBeNull();
//   expect(repair('string')).toBeNull();
//   expect(repair(1)).toBeNull();
// });
// });

// fail - accepts item object, returns new item object modified according to fail rules
// The durability of an item cannot be less than 20 when the item's enhancement level is between +0 /and +14.
// The durability of an item cannot be less than 0 when the item's enhancement level is between +15 and TET.
// From Luis
describe('fail()', () => {
  it('Durability decreases by five, if enhance is between 0 and 14', () => {
    const sword = {
      name: 'Iron Sword',
      type: 'Weapon',
      durability: 85,
      enhancement: 11
    };

    expect(fail(sword).durability).toBe(sword.durability - 5);
  });

  it('Enhancement decreases by one, if enhance is above 16', () => {
    const sword = {
      name: 'Iron Sword',
      type: 'Weapon',
      durability: 85,
      enhancement: 18
    };

    expect(fail(sword).enhancement).toBe(sword.enhancement - 1);
  });
});
