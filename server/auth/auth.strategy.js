const LocalStrategy = require('passport-local').Strategy;
const passportJwt = require('passport-jwt');
// const config = require('config');
const passportGoogle = require('passport-google-oauth');
const passportFacebook = require('passport-facebook');

const JwtStrategy = passportJwt.Strategy;
const GoogleStrategy = passportGoogle.OAuth2Strategy;
const FacebookStrategy = passportFacebook;
const { ExtractJwt } = passportJwt;

const userModel = require('../model/user.model')

const secretKey = process.env.JWT_SECRET
const authenticate = () =>
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        userModel.findOne({ email }, async (err, user) => {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, { message: 'user not found' })
            }
            const res = await user.comparePassword(password)
            if (!res) {
                return done(null, false, { message: 'Invalid password' })
            }
            return done(null, user, { message: 'loged In Sucessfully' })
        })
    });

const authenticateToken = () =>
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secretKey,
        },
        (token, done) => {
            userModel.findOne({ id: token.id }, (err, user) => {
                if (err) {
                    return done(err, false)
                }

                if (!user) {
                    console.log('hello')

                    return done(undefined, false, { message: 'token not valid' })
                }
                return done(undefined, user, { message: 'loged In Sucessfully' })
            })
        },
    );


const googleAuthenticate = () => new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback',
    scope: ['email', 'profile'],
    state: true
},
    ((accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        return cb(null, profile);
    })
);

const facebookAuthenticate = () => new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/api/auth/facebook/callback"
},
    ((accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        return cb(null, profile);
    })
);

module.exports = { authenticate, authenticateToken, googleAuthenticate, facebookAuthenticate }