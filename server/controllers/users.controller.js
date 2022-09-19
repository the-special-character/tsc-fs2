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
      if (user) {
        return rw.ok('founded');
      }
    } catch (error) {
      return rw.internalError(error.message);
    }
  };
}

module.exports = UserController;
