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
}

module.exports = UserController;
