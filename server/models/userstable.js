const mongoose = require('mongoose');

const { Schema, model } = mongoose;

// eslint-disable-next-line no-unused-vars
const validateEmail = email =>
  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email);

// eslint-disable-next-line new-cap
const usersschema = new Schema({
  firstname: {
    type: String,
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
});

// eslint-disable-next-line no-unused-vars
const userstable = model('Users', usersschema);

module.exports = usersschema;
