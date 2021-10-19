const { SECRET, COOKIE_NAME } = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    next();
};