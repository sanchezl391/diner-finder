const passport = require('passport');


module.exports = (app => {
    console.log('auth routes');
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res, next) => {
            // console.log('is authenticated:', req.isAuthenticated());
            // res.send(req.user);
            req.logIn(req.user, function (err) {
                if (err) { return next(err); }
                res.redirect('/auth/current_user');
            });
        }
    );
    
    app.get('/auth/current_user', (req, res) => {
        if(req.user)
            res.send('this is your id - ' + req.user.dataValues.id);
        else
            res.send('not logged in :(');
    });
    console.log('end of auth routes');
});