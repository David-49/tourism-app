const { GRAPHQL_TYPES_VALUES_EXAMPLE } = require('./constants');

module.exports = ({ variables, withName }) => {
  if (!variables.length) return '';
  variables = variables.map(({ name, type }) =>
    withName ? `${name}: ${GRAPHQL_TYPES_VALUES_EXAMPLE[type]}` : GRAPHQL_TYPES_VALUES_EXAMPLE[type]
  );
  return variables.join(', ');
};
