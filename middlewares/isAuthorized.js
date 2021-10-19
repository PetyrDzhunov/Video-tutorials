const { SECRET, COOKIE_NAME } = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    let token = req.cookies[COOKIE_NAME];

    if (!token) return res.status(401).redirect('/auth/login');

    jwt.verify(token, SECRET, function(err, decoded) {
        if (err) return res.status(401).redirect('/auth/login');
        next();
    });
};