const bcrypt = require('bcrypt');

const UserModel = require('../model/user.model');
const ResponseWrapper = require('../helper/responsewrapper');

class Users {
  static register = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      rw.created(savedUser);
    } catch (error) {
      rw.internalError(error.message);
    }
  };

  static login = async (req, res) => {
    const rw = new ResponseWrapper(res);
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({
        email,
        password,
      });

      if (!user) {
        return rw.notfound('User not found');
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
      rw.internalError(error.message);
    }
  };
}

module.exports = Users;
