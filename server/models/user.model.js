const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('config');

const { Schema, model } = mongoose;

const validateEmail = email => {
  const re =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

function batchValidation(value) {
  if (this.role === 'student') {
    return value.length > 0;
  }
  return true;
}

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [
        validateEmail,
        'Please fill a valid email address',
      ],
    },
    password: { type: String, required: true },
    mobile: String,
    batch: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'batch',
        },
      ],
      validate: [
        batchValidation,
        'Min 1 record required...',
      ],
    },
    role: {
      type: String,
      enum: ['admin', 'tutor', 'student'],
      default: 'student',
    },
  },
  {
    toJSON: {
      transform: (data, res) => {
        const { password, ...rest } = res;
        return rest;
      },
    },
    versionKey: false,
  },
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const saltRounds = config.get('saltRounds');
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
  next();
});

userSchema.methods = {
  async comparePassword(password) {
    const result = await bcrypt.compare(
      password,
      this.password,
    );

    return result;
  },
};

const userModel = model('users', userSchema);

module.exports = userModel;
