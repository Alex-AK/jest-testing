module.exports = {
  enhancer
};

// item object sample
const itemSample = {
  name: 'Iron Sword || Iron Shield',
  type: 'Weapon || Armor',
  durability: '0-100 is number && starts at 100',
  enhancement: '0-15 PRI, DUO, TRI, TET, PEN && starts at 0'
};

const item = {
  name: 'Iron Sword',
  type: 'Weapon',
  durability: 10,
  enhancement: '+4'
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

const enhancer = item => {
  success = item => {
    item = {
      ...item,
      enhancement: item.enhancement[enhancementLevel + 1]
    };
  };

  fail = item => {};

  repair = item => {
    item = {
      ...item,
      durability: 100
    };
  };
};
