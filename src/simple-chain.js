const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) this.chain.push(' ');
    else this.chain.push(' ' + value + ' ');
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.chain.length || !(isFinite(position))) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resu = '(' + this.chain.join(')~~(') + ')';
    this.chain = [];
    return resu;
  }
};
module.exports = chainMaker;
