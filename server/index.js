const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const cors = require('cors');
const passport = require('passport');

const questionRoute = require('./routes/question');
const userRoute = require('./routes/user.route');
const batchRoute = require('./routes/batch.route');

dotenv.config({
  override: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(cors());

app.use('/api/auth', userRoute);
app.use('/api/questions', questionRoute);
app.use('/api/batch', batchRoute);

const {
  authenticate,
  tokenValidation,
  googleAuthenticate,
  // serializeUser,
  // deserializeUser,
} = require('./auth/authStrategy');

passport.use(authenticate());
passport.use(tokenValidation());
passport.use(googleAuthenticate());

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    console.log(user['_json']);
    cb(
      null,
      user['_json'] || {
        id: user.id,
        username: user.username,
        name: user.name,
      },
    );
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://localhost:27017/quizeApp',
    );
    console.log('database connected....');
  } catch (error) {
    console.log(error);
  }
};

connectDB();

const port = process.env.PORT || 3004;

app.listen(port, 'localhost', () => {
  console.log(`server started on port ${port}`);
});
