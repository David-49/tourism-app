module.exports = value => {
  if (!value.length) return '';
  value = value.map(({ name }) => name);
  return value.join(', ');
};
