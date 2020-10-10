const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(typeof date == "undefined") return 'Unable to determine the time of year!';
  if(typeof date != "object") return 'FAIL';
  let mon = date.getUTCMonth();
  if(mon == 11||mon == 0 || mon == 1) return 'winter';
  if(mon > 1&& mon <= 4) return 'spring';
  if(mon > 4&& mon <= 7) return 'summer';
  if(mon > 7&& mon <= 10) return 'fall';
  return false;
};
