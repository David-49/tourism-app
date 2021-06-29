const { GRAPHQL_TYPESCRIPT_TYPES } = require('./constants');

module.exports = value => {
  value = value.map(({ name, type }) => `\t${name}: ${GRAPHQL_TYPESCRIPT_TYPES[type]};`);
  return value.join('\n');
};
