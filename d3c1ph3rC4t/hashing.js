exports.hash = function (pw, salt, alg, out) {
  const { createHmac } = require('node:crypto');
  //console.log(pw)
  let pwHash = createHmac(alg, pw)
     .update(salt)
     .digest(out);
  return pwHash;
};
