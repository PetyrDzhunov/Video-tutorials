const authService = require('../services/authService');

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

router.post('/login', (req, res) => {
    res.redirect('/');
});

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    authService.register(username, password)
        .then((createdUser) => {
            console.log(createdUser)
            res.redirect('/auth/login');
        })
        .catch(error => next(error))
});
module.exports = router;