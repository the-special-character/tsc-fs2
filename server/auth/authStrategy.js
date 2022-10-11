const LocalStrategy = require('passport-local').Strategy;
const passportJwt = require('passport-jwt');
const passportGoogle = require('passport-google-oauth');
const User = require('../models/user.model');

const JWTStrategy = passportJwt.Strategy;
const GoogleStrategy = passportGoogle.OAuth2Strategy;
const { ExtractJwt } = passportJwt;

const authenticate = () =>
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, next) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return next(null, false, {
            message: 'User not available',
          });
        }
        const result = await user.comparePassword(password);
        if (!result) {
          return next(null, false, {
            message: 'Password is not valid',
          });
        }
        return next(null, user, {
          message: 'Login Successfull...',
        });
      } catch (error) {
        return next(error);
      }
    },
  );

const googleAuthenticate = () =>
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      scope: ['email', 'profile'],
      state: true,
    },
    (accessToken, refreshToken, profile, cb) =>
      cb(null, profile),
  );

const tokenValidation = () =>
  new JWTStrategy(
    {
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret key',
    },
    async (jwtToken, next) => {
      try {
        const user = await User.findById(jwtToken.id);
        if (!user) {
          return next(null, false, {
            message: 'Token Not valid',
          });
        }
        return next(null, user, {
          message: 'Login Successfull...',
        });
      } catch (error) {
        return next(error);
      }
    },
  );

module.exports = {
  authenticate,
  tokenValidation,
  googleAuthenticate,
  // serializeUser,
  // deserializeUser,
};
