const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let trn = (2 ** disksNumber) - 1;
  return {turns: trn, seconds: Math.floor(3600*trn/turnsSpeed)}
};
