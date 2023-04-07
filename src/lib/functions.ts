/**
 * Returns the keyword
 */
const getCodeByName = (list: any[], name: string) => {
  const newList = list.filter(item => item.name === name);
  return newList[0].code;
};

export { getCodeByName };
