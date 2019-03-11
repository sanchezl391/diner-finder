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
        res.redirect('/');
    });

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/find');
        }
    );
    
    app.get('/api/current_user', (req, res) => {
        if(req.user)
            res.send(req.user.dataValues);
        else
            res.send('');
    });
    console.log('end of auth routes');
});