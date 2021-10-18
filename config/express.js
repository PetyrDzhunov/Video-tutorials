const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');

module.exports = (app) => {
    app.engine('hbs', hbs({
        extname: 'hbs',
    }));
    app.set('view engine', 'hbs'); // use handlebars as an view-engine
    app.use('/static', express.static('/static')); //load static files
    app.use(express.urlencoded({ extended: true }));
    // so we can parse incomming data from request body
    app.use(cookieParser());
}