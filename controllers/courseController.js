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

    console.log(courseData);

    courseService.create(courseData)
        .then((createdCourse) => {
            res.redirect('/');
        })
        .catch(next);
});


module.exports = router;