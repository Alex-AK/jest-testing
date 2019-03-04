module.exports = {
  success,
  fail,
  repair
};

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

function success(item, level) {
  return (item = {
    ...item,
    enhancement: item.enhancement
  });
}

function fail(item) {}

function repair(item) {
  console.log(item);
  if (typeof item === 'object' && item && typeof item.name === 'string') {
    return (item = {
      ...item,
      durability: 100
    });
  } else {
    return null;
  }
}
