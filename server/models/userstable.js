const mongoose = require('mongoose');
// const userSchema = require('../validationschema/users');
const bcrypt = require('bcrypt');
const config = require('config');

const { Schema, model } = mongoose;

// eslint-disable-next-line no-unused-vars
// const validateEmail = email =>
//   /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);

// eslint-disable-next-line new-cap
const userSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phonenum: {
      type: String,
    },

    age: {
      type: Number,
    },
    Gender: {
      type: String,
    },
  },

  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        const { password, ...rest } = ret;
        return rest;
      },
    },
  },
);
// eslint-disable-next-line no-unused-vars
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const saltRound = config.get('saltRound');
    const salt = await bcrypt.genSalt(Number(saltRound));
    // eslint-disable-next-line no-unused-vars
    const hashPassword = await bcrypt.hash(
      this.password,
      salt,
    );
  }
  next();
});
const userTable = model('Users', userSchema);
module.exports = userTable;
