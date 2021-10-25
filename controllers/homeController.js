const router = require('express').Router();
const courseService = require('../services/courseService');
router.get('/', (req, res, next) => {
    courseService.getAll()
        .then(courses => {
            res.render('home', { courses });
        })
        .catch(next);
});

module.exports = router;