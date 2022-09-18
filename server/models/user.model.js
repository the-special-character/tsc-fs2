const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("config");

const { Schema, model } = mongoose;

const validateEmail = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: "first name is required",
    },
    lastName: {
      type: String,
      required: "last name is required",
    },
    email: {
      type: String,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: "last name is required",
    },
    mobile: {
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
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const saltRounds = config.get("saltRounds");
    const salt = await bcrypt.genSalt(Number(saltRounds));
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
  }
  next();
});

module.exports = model("users", userSchema);
