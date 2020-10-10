const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = str;
  let add = '';
  let separ = '+';
  if(options.addition !== undefined) {
    add = repeater(options.addition, {repeatTimes: options.additionRepeatTimes, separator: options.additionSeparator})
  }
  if(options.separator !== undefined) separ = options.separator;
  for(let i = 1; i < options.repeatTimes; i++) { 
    res += add + separ + str;
  }
  res += add;
  return res;
};
  