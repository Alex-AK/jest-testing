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

function success(item, enhancementLevel) {
  return (item = {
    ...item,
    enhancement: item.enhancement[enhancementLevel + 1]
  });
}

function fail(item) {}

function repair(item) {
  return (item = {
    ...item,
    durability: 100
  });
}
