const router = require('express').Router();
const courseService = require('../services/courseService');


router.get('/create', (req, res) => {
    res.render('createCourse');
});

router.post('/create', (req, res, next) => {
    let { title, description, imageUrl, isPublic } = req.body;
    let courseData = {
        title,
        description,
        imageUrl,
        isPublic: isPublic == 'on' ? true : false,
    };


    courseService.create(courseData)
        .then((createdCourse) => {
            res.redirect('/');
        })
        .catch(next);
});


router.get('/:courseId/details', (req, res, next) => {
    let courseId = req.params.courseId;
    courseService.getOne(courseId)
        .then(course => {
            res.render('courseDetails', { course })
        })
        .catch(next);
});


module.exports = router;