// const functions = require('firebase-functions');
const express = require('express');
// const Cors = require('cors');

const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./services/passport'); 
const app = express();

// app.use(bodyParser.json());

// app.use(Cors());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
// app.use((req, res, next)=> {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // your website
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     next();
// });
// app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session());
// set up routes
require('./routes/authRoutes')(app);


// exports.app = functions.https.onRequest(app);
const PORT = 5000;
app.listen(PORT);