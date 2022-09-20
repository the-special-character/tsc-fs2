const bcrypt = require("bcrypt");

const UserModel = require("../models/user.model");
const ResponseWrapper = require("../helper/responceWrapper");

class UserController {
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
      });
      if (!user) {
        return rw.notFound("User not Found");
      }
      await bcrypt.compare(password, user.password);

      return rw.created(user);
    } catch (error) {
      return rw.internalError(error.message);
    }
  };
}

module.exports = UserController;
