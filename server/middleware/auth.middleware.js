const passport = require('passport')
const ResponseWrapper = require('../helper/responsewrapper')

const auth = (req, res, next) => {
    const resp = new ResponseWrapper(res)

    passport.authenticate('jwt', (err, user, info) => {
        if (err) return resp.INTERNAL_ERROR(err.message)

        if (!user) return resp.UNAUTHORIZED(info.message)
        return next()
    })(req, res, next)
}

module.exports = auth