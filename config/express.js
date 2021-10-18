const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app) => {
    app.engine('handlebars', handlebars({
        extname: 'hbs',
    }));
    app.set('view engine', handlebars); // use handlebars as an view-engine
    app.use('/static', express.static('/static')); //load static files
    app.use(express.urlencoded({ extended: true }));
    // so we can parse incomming data from request body
}