// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('config')
const passport = require('passport')

const UserModel = require('../model/user.model');
const ResponseWrapper = require('../helper/responsewrapper');

class Users {
  static register = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      const Secret = config.get('Secret')
      const token = jwt.sign(savedUser.toJSON(), Secret, {
        expiresIn: 1000 * 60 * 60 * 24,
      })
      rw.created(savedUser, token);
    } catch (error) {
      rw.internalError(error.message);
    }
  };

  static login = async (req, res, next) => {
    const rw = new ResponseWrapper(res);
    passport.authenticate('local', (err, user, info) => {
      if (err) return rw.internalError(err.message)

      if (!user) return rw.UNAUTHORIZED(info.message)
      const secretKey = process.env.JWT_SECRET
      const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
        expiresIn: 1000 * 60 * 60 * 24,
      })
      return rw.ok({ res: user, token })
    })(req, res, next)
  };

  // static googleLogin = (req, res, next) => passport.authenticate(
  //   'google',
  //   (req, res) => {
  //     res.send("success")
  //   }
  // )(req, res, next)

  static getUser = async (req, res) => {
    const rw = new ResponseWrapper(res)
    try {
      const { id } = req.params
      const AUser = await UserModel.findById(id).populate('batch')

      rw.ok(AUser)
      if (AUser === null) {
        throw new Error('requested data do not exist...')
      }
    } catch (error) {
      rw.invalidInput(error.message)
    }
  }
}

module.exports = Users;
