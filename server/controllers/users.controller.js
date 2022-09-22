const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const ResponseWrapper = require('../helper/responseWrapper');

class UserController {
  static register = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      rw.created(savedUser);
    } catch (error) {
      rw.internalError(error);
    }
  };

  static login = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({
        email,
      });
      if (!user) {
        return rw.notFound('User Not found');
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        user.password,
      );

      if (!isPasswordValid) {
        return rw.notFound('Password not valid');
      }

      return rw.ok(user);
    } catch (error) {
      return rw.internalError(error);
    }
  };
}

module.exports = UserController;
