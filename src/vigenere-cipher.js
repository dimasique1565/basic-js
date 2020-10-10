const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir_mode = true) {
    this.directMode = dir_mode;
  }
  encrypt(message, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  } 
}

module.exports = VigenereCipheringMachine;
