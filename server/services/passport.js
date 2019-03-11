const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const sequelize = require('../services/database');
const keys = require('../config/keys');
const User = require('../models/user');

console.log('build connection to db');
sequelize.authenticate().then(() => { console.log('Connection has been established successfully.'); return;}).catch(err => { console.error('Unable to connect to the database:', err);}).catch();

passport.serializeUser((user, done) => {
    console.log('serializing user:', user.dataValues.id);
    done(null, user.dataValues.id);
});

passport.deserializeUser((id, done) => {
    console.log('trying to deserialize user with id ', id);
    User.findOne({where: {id: id}}).then(user => {
        console.log('deserialized user: ', user);
        return done(null, user);
    }).catch();
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({where: {googleId: profile.id}}).then(existingUser => {
                console.log('google strategy: looking for user');
                if (existingUser) {
                    console.log('existing user:', existingUser);
                    return done(null, existingUser);
                }  else {
                    User.build({ googleId: profile.id })
                        .save()
                        .then(user => done(null, user)).catch();      
                }   
                return;
            }
            ).catch();
        }
    )
);



