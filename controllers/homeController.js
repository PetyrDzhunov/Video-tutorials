const router = require('express').Router();
const moment = require('moment');

const courseService = require('../services/courseService');
router.get('/', (req, res, next) => {
    if (req.user) {
        courseService.getAll(req.query.search)
            .then(courses => {
                courses = courses.map(x => ({...x, createdAt: moment(x.createdAt).format('MMMM Do YYYY, h:mm:ss') }))
                res.render('home', { courses });
            })
            .catch(next)
    } else {
        courseService.getMostPopularCourses(3)
            .then(courses => {
                res.render('home', { courses });
            });
    };
});


module.exports = router;