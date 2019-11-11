/**
 * Returns the keyword
 */
const getCodeByName = (list, name) => {
  const newList = list.filter(item => item.name === name);
  return newList[0].code;
};

module.exports = {
  getCodeByName,
};
