const authService = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("In Authentication controller");
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    authService.login(username, password)
        .then((token) => {
            res.cookie(COOKIE_NAME, token);
            res.redirect('/');
        })
        .catch(next);
});

router.post('/register', (req, res, next) => {
    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.render('register', { error: { message: 'Passwords should match!' } });
        return;
    };

    authService.register(username, password)
        .then((createdUser) => {
            res.redirect('/auth/login');
        })
        .catch(err => {
            let error = Object.keys(err.errors).map(x => ({ message: err.errors[x].message }))[0];
            res.render('register', { error });
        })
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/');
});

module.exports = router;