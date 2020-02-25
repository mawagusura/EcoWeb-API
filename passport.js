var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var passportJWT = require('passport-jwt');
var BasicStrategy = require('passport-http').BasicStrategy;
var JWTStrategy = passportJWT.Strategy;
var userService = require('./services/userService.js')
var jwtSecret = require('./utils/constUtils.js').jwtsecret

passport.use(new BasicStrategy(
    function(mail, password, done) {
        try {
            const user = userService.authenticate(mail,password)
    
            if (user) {
                return done(null, user);
            } else {
                return done("{\"errorMessage\": \"Incorrect Mail / Password\"}");
            }
        } catch (error) {
            done(error);
        }
    }
  ));

passport.use(new JWTStrategy({
        jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret,
    },
    (jwtPayload, done) => {
        console.log(jwtPayload)
        if (Date.now() > jwtPayload.expires) {
            return done('jwt expired');
        }
        return done(null, jwtPayload);
    }
));
