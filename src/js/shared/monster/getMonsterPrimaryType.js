module.exports = monster => {
  return (monster.types[0] || monster.types[1]).name;
};
