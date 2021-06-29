/**
 * @param {string} value
 */
module.exports = value => {
  value = value.split("/");
  value.pop();
  return value.join("/");
};
