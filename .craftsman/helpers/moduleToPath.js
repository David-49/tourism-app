/**
 * @param {string} existingModule
 * @param {string} newModule
 */
module.exports = (existingModule, newModule) => {
  if (existingModule !== '') {
    existingModule = existingModule.replace('./src/modules/', '');
    return `${existingModule}/`;
  }
  if (newModule !== '') {
    return `${newModule}/`;
  }
  return '';
};
