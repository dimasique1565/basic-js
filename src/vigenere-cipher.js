const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(dir_mode = true) {
    this.directMode = dir_mode;
  }
  encrypt(message, key) {
    if(typeof message != "string" || typeof key != "string") throw Error;
    let alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    message = message.toUpperCase();
    let keyarr = key.toUpperCase().split('');
    let msgarr = message.split('');

    let onlyletters = [];
    msgarr.forEach(function(elem){
      if(alphabetArray.includes(elem)) {
        onlyletters.push(elem);
      }
    });

    let keyarrlon = [];
    for(let i = 0, j = 0; i < onlyletters.length; i++, j++) {
      if(j >= keyarr.length) j -= keyarr.length;
      keyarrlon.push(keyarr[j]);
    }

    for(let i = 0; i < onlyletters.length; i++) {
      let num = onlyletters[i].charCodeAt() + keyarrlon[i].charCodeAt() - 130;
      onlyletters[i] = alphabetArray[num % 26];
    }
    
    for(let i = 0, j = 0; i < msgarr.length; i++) {
      if(alphabetArray.includes(msgarr[i])) {
        msgarr[i] = onlyletters[j];
        j++;
      }
    }
    return this.directMode? msgarr.join('') : msgarr.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if(typeof encryptedMessage != "string" || typeof key != "string") throw Error;
    let alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let keyarr = key.toUpperCase().split('');
    let msgarr = encryptedMessage.split('');
    let onlyletters = [];
    msgarr.forEach(function(elem){
      if(alphabetArray.includes(elem)) {
        onlyletters.push(elem);
      }
    });

    let keyarrlon = [];
    for(let i = 0, j = 0; i < onlyletters.length; i++, j++) {
      if(j >= keyarr.length) j -= keyarr.length;
      keyarrlon.push(keyarr[j]);
    }

    for(let i = 0; i < onlyletters.length; i++) {
      let num = onlyletters[i].charCodeAt() - keyarrlon[i].charCodeAt() + 26;
      onlyletters[i] = alphabetArray[num % 26];
    }
    
    for(let i = 0, j = 0; i < msgarr.length; i++) {
      if(alphabetArray.includes(msgarr[i])) {
        msgarr[i] = onlyletters[j];
        j++;
      }
    }
    return this.directMode? msgarr.join('') : msgarr.reverse().join('');
  } 
}

module.exports = VigenereCipheringMachine;
