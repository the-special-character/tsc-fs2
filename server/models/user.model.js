const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("config");

const { Schema, model, ObjectId } = mongoose;

const validEmail = (email) => {
  const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  return regex.test(email);
};
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: [validEmail, ""],
      unique: true,
    },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    batch: [ObjectId],
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        const { password, ...rest } = ret;
        return rest;
      },
    },
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const dbConfig = config.get("saltRounds");
    const salt = await bcrypt.genSalt(Number("saltRounds"));
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
  }
  next();
});

const userModel = model("users", userSchema);

module.exports = userModel;
