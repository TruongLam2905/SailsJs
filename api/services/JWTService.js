const jwt = require('jsonwebtoken');
const SECRET = '123131123'
module.exports = {
  issuer: function (payload, expiresIn) {
    return jwt.sign(payload, SECRET, {
      expiresIn
    });
  },
  verify(token) {
    return jwt.verify(token,SECRET);
  }
};
