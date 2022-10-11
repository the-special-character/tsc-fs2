const passport = require('passport');
const ResponseWrapper = require('../helper/responceWrapper');

const auth = (req, res, next) => {
  passport.authenticate('jwt', (err, user, info) => {
    const rw = new ResponseWrapper(res);
    if (err) return rw.internalError(err.message);
    if (!user) {
      return rw.unAuthorised(info.message);
    }
    return next();
  })(req, res, next);
};

module.exports = auth;
