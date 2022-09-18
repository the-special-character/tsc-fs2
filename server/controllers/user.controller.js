const bcrypt = require("bcrypt");
const ResponseWrapper = require("../helper/responceWrapper");
const UserModel = require("../models/user.model");
class UserController {
  static register = async (req, res) => {
    const resWrapper = new ResponseWrapper(res);

    try {
      const user = new UserModel(req.body);
      const savedUser = await user.save();
      resWrapper.created(savedUser);
    } catch (error) {
      resWrapper.internalError(error.message);
    }
  };

  static login = async (req, res) => {
    const resWrapper = new ResponseWrapper(res);

    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });

      if (!user) {
        return resWrapper.notFound("User not found");
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new Error("Wrong password");
      }
      return resWrapper.created(user);
    } catch (error) {
      return resWrapper.internalError(error.message);
    }
  };
}

module.exports = UserController;
