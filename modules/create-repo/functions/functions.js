const data = require("./../data/data");
const licenses = data.licenses;

/**
 * Returns the keyword
 */
exports.getLicenseKeywordByName = name => {
  const keyword = licenses.filter(license => license.name === name);
  return keyword[0].keyword;
};
