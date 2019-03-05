module.exports = {
  success,
  fail,
  repair
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

function success(item) {
  let { name, enhancement } = item;

  const newDisplayName = `${level[enhancement + 1]} ${name}`;

  return {
    ...item,
    enhancement: item.enhancement + 1,
    displayName: newDisplayName
  };
}

function fail(item) {
  // unable to upgrade when item is greater than level 14 and durability is below 25
  if (item.enhancement < 15 && item.durability < 25) {
    return { ...item };
  }
  const durability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  const enhancement =
    item.enhancement > 16 && item.durability > 10
      ? item.enhancement - 1
      : item.enhancement;
  return { ...item, durability, enhancement };
}

function repair(item) {
  if (typeof item === 'object' && item && item.name) {
    return (item = {
      ...item,
      durability: 100
    });
  } else {
    return null;
  }
}
