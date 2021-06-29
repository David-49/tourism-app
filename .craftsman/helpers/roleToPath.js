module.exports = value => {
  switch (value) {
    case "Page":
      return "./src/pages";
    case "Module":
      return "./src/modules";
    default:
      return "./src/components";
  }
};
