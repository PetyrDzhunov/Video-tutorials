const authService = require('../services/authService');
const { body, validationResult } = require('express-validator');

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
            res.cookie('token', token);
            res.redirect('/');
        })
        .catch(next);
});

router.post('/register',
    body('password-repeat').trim().custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Password missmatch');
        }
    }),
    (req, res, next) => {
        let errors = validationResult(req);
        if (errors.length > 0) {
            let error = errors[0];
            error.message = error.msg;
        }
        const { username, password } = req.body;
        authService.register(username, password)
            .then((createdUser) => {
                res.redirect('/auth/login');
            })
            .catch(error => next(error))
    }
);
module.exports = router;