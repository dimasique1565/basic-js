const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(year) {
  if(isNaN(parseFloat(year)) || +year > MODERN_ACTIVITY || +year <= 0 || typeof year != 'string') {
    return false;
  };
  return Math.ceil(Math.log(parseFloat(year)/MODERN_ACTIVITY)*HALF_LIFE_PERIOD/0.693);
};
