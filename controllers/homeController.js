const router = require('express').Router();
const moment = require('moment');

const courseService = require('../services/courseService');
router.get('/', (req, res, next) => {
    courseService.getAll()
        .then(courses => {
            courses = courses.map(x => ({...x, createdAt: moment(x.createdAt).format('MMMM Do YYYY, h:mm:ss') }))
            res.render('home', { courses });
        })
        .catch(next)
});


module.exports = router;