const GRAPHQL_TYPESCRIPT_TYPES = {
  ID: 'string | undefined',
  String: 'string | undefined',
  Int: 'number | undefined',
  Float: 'number | undefined',
  Boolean: 'boolean | undefined',
  'ID!': 'string',
  'String!': 'string',
  'Int!': 'number',
  'Float!': 'number',
  'Boolean!': 'boolean',
};

const GRAPHQL_TYPES_VALUES_EXAMPLE = {
  ID: 'undefined',
  String: 'undefined',
  Int: 'undefined',
  Float: 'undefined',
  Boolean: 'undefined',
  'ID!': '"1"',
  'String!': '"Hello"',
  'Int!': '1',
  'Float!': '0.1',
  'Boolean!': 'true',
};

module.exports = {
  GRAPHQL_TYPESCRIPT_TYPES,
  GRAPHQL_TYPES_VALUES_EXAMPLE,
};
