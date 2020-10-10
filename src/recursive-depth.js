const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for(let i = 0; i < arr.length; i++) {
      if(typeof arr[i] == 'object') {
        let neew = this.calculateDepth(arr[i]);
        if(neew > depth - 1) depth = neew + 1;
      }
    }
    return depth;
  }
};