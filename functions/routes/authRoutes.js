const passport = require('passport');


module.exports = (app => {
    console.log('auth routes');
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res, next) => {
            // console.log('is authenticated:', req.isAuthenticated());
            // res.send(req.user);
            req.logIn(req.user, function (err) {
                if (err) { return next(err); }
                res.redirect('/auth/loggedin');
            });
        }
    );
    
    app.get('/auth/loggedin', (req, res) => {
        res.send('You are logged in, this is your id - ' + req.user.dataValues.id);
    });
    console.log('end of auth routes');
});