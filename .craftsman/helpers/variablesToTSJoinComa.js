const { GRAPHQL_TYPESCRIPT_TYPES } = require('./constants');

module.exports = value => {
  if (!value.length) return '';
  value = value.map(({ name, type }) => `${name}: ${GRAPHQL_TYPESCRIPT_TYPES[type]}`);
  return value.join(', ');
};
