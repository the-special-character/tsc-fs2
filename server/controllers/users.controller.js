// othentication
// user
// login
// register
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
        password,
      });
      if (!user) {
        rw.notFound('User not found');
      }
      if (password === user.password) {
        rw.created(user);
      } else rw.notFound('password is wrong');
    } catch (error) {
      rw.internalError(error.message);
    }
  };
}

module.exports = UserController;
