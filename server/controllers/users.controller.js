// require('../auth/passportHandler');
const jwt = require('jsonwebtoken');
const config = require('config');
// const passport = require('passport');
const passport = require('passport');
const UserModel = require('../models/user.model');
const ResponseWrapper = require('../helper/responceWrapper');

class UserController {
  static register = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();

      const secretOrPrivateKey = config.get(
        'secretOrPrivateKey',
      );
      const accessToken = jwt.sign(
        {
          ...user.toJSON(),
        },
        secretOrPrivateKey,
        {
          expiresIn: 1000 * 60 * 60 * 24,
        },
      );

      rw.created({ accessToken, user: savedUser });
    } catch (error) {
      rw.internalError(error);
    }
  };

  static login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      const rw = new ResponseWrapper(res);
      if (err) return rw.internalError(err.message);
      if (!user) {
        return rw.unAuthorised(info.message);
      }

      const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        'secret key',
      );

      return rw.ok({ accessToken, user });
    })(req, res, next);
  };

  // static googleLogin = (req, res, next) =>
  //   passport.authenticate('google')(req, res, next);
}

module.exports = UserController;
