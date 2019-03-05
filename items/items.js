module.exports = {
  success,
  fail,
  repair
};

function success(item, level) {
  return (item = {
    ...item,
    enhancement: item.enhancement + 1
    // displayName: `${level[enhancement]} ${name}`
  });
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
