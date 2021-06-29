/**
 * @param {string} value
 */
module.exports = value => {
  if (!value.length) return '';

  value = value.map(({ name }) => {
    return `${name}: $${name}`;
  });
  return `(${value.join(', ')})`;
};
