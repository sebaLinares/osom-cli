const { getLicenseKeywordByName } = require("./functions");

test("Should reurn the keyword for the corresponding license name", () => {
  expect(getLicenseKeywordByName("SIL Open Font License 1.1")).toBe("ofl-1.1");
});
