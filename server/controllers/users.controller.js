// eslint-disable-next-line no-unused-vars
// const Usertable = require('../models/userstable');
const Users = require('../models/userstable');

class Userstable {
  // static getUsres = async (req, res) => {
  //   try {
  //     const users = await Users.find();
  //     res.send(users);
  //   } catch (error) {
  //     res.status(400).send(error.message);
  //   }
  // };

  static addUsers = async (req, res) => {
    try {
      const users1 = new Users(req.body);
      const savedusers = await users1.save();
      res.send(savedusers);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  static getuserData = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findById(id);
      if (user === null) {
        throw new Error('Record does not exist');
      }
      res.send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  //   static updateQuestion = async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const updatedRecord =
  //         await QuestionBank.findByIdAndUpdate(id, req.body, {
  //           new: true,
  //         });
  //       res.send(updatedRecord);
  //     } catch (error) {
  //       res.status(400).send(error.message);
  //     }
  //   };

  //   static deleteQuestion = async (req, res) => {
  //     try {
  //       const { id } = req.params;
  //       const deleteRecord =
  //         await QuestionBank.findByIdAndDelete(id, req.body, {
  //           new: true,
  //         });
  //       res.send(deleteRecord);
  //     } catch (error) {
  //       res.status(400).send(error.message);
  //     }
  //   };
}

module.exports = Userstable;
