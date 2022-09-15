const Userlist = require("../model/User.model");
const ResponseWrapper = require("../helpers/responseWrapper");

class UserProgram {
  static addUser = async (req, res) => {
    const resp = new ResponseWrapper(res);

    try {
      const addeduser = new Userlist(req.body);
      const saveduser = await addeduser.save();
      return resp.CREATED(saveduser);
    } catch (error) {
      //   return resp.INVALID_INPUT(`ERROR`);
      return res.status(400).send(error.message);
    }
  };

  static getAllUser = async (req, res) => {
    const resp = new ResponseWrapper(res);

    try {
      const allUser = await Userlist.find();
      return resp.OK(allUser);
    } catch (error) {
      return resp.INTERNAL_ERROR(`Cannot Fetch`);
    }
  };

  static updateUser = async (req, res) => {
    const resp = new ResponseWrapper(res);

    try {
      const { id } = req.params;
      const updatedData = await Userlist.findOneAndUpdate(id, req.body, {
        new: true,
      });
      resp.UPDATED(updatedData);
    } catch (error) {
      resp.INVALID_INPUT(`INVALID_INPUT`);
    }
  };

  static deleteUser = async (req, res) => {
    const resp = new ResponseWrapper(res);
    try {
      const { id } = req.params;
      await Userlist.findByIdAndDelete(id);
      resp.DELETED(`Record deleted Succesfully`);
    } catch (error) {
      resp.INVALID_INPUT(`Invalid input`);
    }
  };
}

module.exports = UserProgram;
