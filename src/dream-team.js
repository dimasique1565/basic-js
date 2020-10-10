const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(typeof members != 'object' || members == null) return false;
  let drTeam = '';
  for(let i =0; i < members.length; i++) {
    if(typeof members[i] == 'string') {
      members[i] = members[i].replace(/\s+/g, '');
    }
  }
  for(let i =0; i < members.length; i++) {
    if(typeof members[i] == 'string') {
      drTeam += members[i].toUpperCase()[0];
    }
  }
  drTeam = drTeam.split('').sort().join('');
  return drTeam;
};
