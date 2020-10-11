const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir_mode = true) {
    this.directMode = dir_mode;
  }
  encrypt(message, key) {
    if(typeof message != "string" || typeof key != "string") throw Error;
    message = message.toUpperCase;
  }
  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage != "string" || typeof key != "string") throw Error;
    
  } 
}

module.exports = VigenereCipheringMachine;
