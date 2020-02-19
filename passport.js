var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportJWT = require('passport-jwt');
var JWTStrategy = passportJWT.Strategy;
var userService = require('./services/userService.js')
var jwtSecret = require('./utils/constUtils.js').jwtsecret


//Passport config
passport.use(new LocalStrategy({
    usernameField: 'mail',
    passwordField: 'password',
}, async (mail, password, done) => {
    try {
        const user = await userService.authenticate(mail,password)

        if (user) {
            return done(null, user);
        } else {
            return done('Incorrect Mail / Password');
        }
    } catch (error) {
        done(error);
    }
}));

passport.use(new JWTStrategy({
        jwtFromRequest: req => req.cookies.jwt,
        secretOrKey: jwtSecret,
    },
    (jwtPayload, done) => {
        if (Date.now() > jwtPayload.expires) {
            return done('jwt expired');
        }
        return done(null, jwtPayload);
    }
));
