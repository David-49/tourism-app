module.exports = value => {
  value = value.split("/");
  value = value.pop();
  value = value.split(".");
  return value.shift();
};
