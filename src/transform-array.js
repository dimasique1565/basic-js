const CustomError = require("../extensions/custom-error");

module.exports = function transform(arraa) {
  throw new CustomError('Not implemented');
/*
  if(arraa == []) return [];
  let arr = [];
  for(let i = 0; i < arraa.length; i++) arr.push(arraa[i]);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == '--discard-prev') {
      if(i == 0) {
        arr.splice(i, 1);
        i--;
      } else {
        arr.splice(i - 1, 2);
        i -= 2;
      }
    } else if(arr[i] == '--double-prev') {
      if(i == 0) {
        arr.splice(i, 1);
        i--;
      } else {
        arr[i] = arr[i - 1];
      }
    } else if(arr[i] == '--double-next') {
      if(i == arr.length - 1) {
        arr.splice(i, 1);
      } else {
        arr[i] = arr[i + 1];
      }
    } else if(arr[i] == '--discard-next') {
      if(i == arr.length - 1) {
        arr.splice(i, 1);
      } else {
        arr.splice(i, 2);
        i--;
      }
    }
  }
  return arr;*/
};
