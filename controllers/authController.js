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

router.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/auth/login');
});
module.exports = router;