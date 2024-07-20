const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
    //#swagger.tags=['Rectifer Information and Inspection']
    res.send('Rectifier Information and Inspection');
})

router.use('/', require('./swagger'));
router.use('/rectifiers', require('./rectifiers'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) {return next(err);}
        res.redirect('/');
    });
});
    

module.exports = router;