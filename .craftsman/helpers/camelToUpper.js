module.exports = value => {
  value = Array.from(value).map(char =>
    char.toUpperCase() === char ? `_${char}` : char.toUpperCase()
  );
  return value.join('');
};
