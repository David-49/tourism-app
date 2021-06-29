module.exports = value => {
  if (!value.length) return '';

  value = value.map(({ name, type }) => `$${name}: ${type}`);
  return `(${value.join(', ')})`;
};
