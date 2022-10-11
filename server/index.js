const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('config');

const coursesRoute = require('./routes/courses');
const questionRoute = require('./routes/question');
const userRoute = require('./routes/users.route');
const batchRoute = require('./routes/batch.route');

dotenv.config({
  override: true,
});

const dbConfig = config.get('Customer.dbConfig');

console.log(dbConfig);

const app = express();
app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: true }))


app.use(
  require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }),
)

app.use(passport.initialize())
app.use(passport.session())

const { authenticate, authenticateToken, googleAuthenticate, facebookAuthenticate } = require('./auth/auth.strategy');

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => cb(null, user));
});

passport.use(authenticate());
passport.use(authenticateToken());
passport.use(googleAuthenticate());
passport.use(facebookAuthenticate());


app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/quizApp', {
//   keepAlive: true,
// });

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/quizApp',
    );
    console.log('database connected...');
  } catch (error) {
    console.log(error);
  }
};

connectDB();

app.use('/api/courses', coursesRoute);
app.use('/api/questions', questionRoute);
app.use('/api/auth', userRoute);
app.use('/api/batch', batchRoute);


const port = process.env.PORT || 3004;

app.listen(port, 'localhost', () => {
  console.log(`server started on port ${port}`);
});
