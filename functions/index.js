// const functions = require('firebase-functions');
const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./services/passport'); 
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);


app.use(passport.initialize());
app.use(passport.session());
// set up routes
require('./routes/authRoutes')(app);


// exports.app = functions.https.onRequest(app);
const PORT = 5000;
app.listen(PORT);