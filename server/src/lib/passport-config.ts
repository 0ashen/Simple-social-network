const { Strategy, ExtractJwt } = require('passport-jwt');

const config = require('./config');
const User = require('../models/User');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
};

module.exports = (passport: any) => {
    passport.use(
        new Strategy(opts, async (payload: any, done: any) => {
            const user = User.findById(payload.id);
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        })
    );
};

export {};
