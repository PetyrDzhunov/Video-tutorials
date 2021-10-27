const router = require('express').Router();
const courseService = require('../services/courseService');


router.get('/create', (req, res) => {
    res.render('createCourse');
});

router.post('/create', (req, res, next) => {
    let courseData = extractCourseData(req);
    courseService.create(courseData, req.user._id)
        .then((createdCourse) => {
            res.redirect('/');
        })
        .catch(next);
});


router.get('/:courseId/details', (req, res, next) => {
    let courseId = req.params.courseId;
    courseService.getOne(courseId, req.user._id)
        .then(course => {
            res.render('courseDetails', course)
        })
        .catch(next);
});

router.get('/:courseId/enroll', (req, res, next) => {
    let courseId = req.params.courseId;
    courseService.enrollUser(courseId, req.user._id)
        .then((response) => {
            res.redirect(`/course/${courseId}/details`);
        })
        .catch(next);
});

router.get('/:courseId/delete', (req, res, next) => {
    let courseId = req.params.courseId;
    courseService.deleteCourse(courseId)
        .then(() => {
            res.redirect('/')
        })
        .catch(next);
});

router.get('/:courseId/edit', (req, res, next) => {
    let courseId = req.params.courseId;
    courseService.getOne(courseId, req.user._id)
        .then(course => {
            course.checked = course.isPublic ? 'checked' : '';
            res.render('editCourse', course)
        })
        .catch(next);
});

router.post('/:courseId/edit', (req, res, next) => {
    const courseId = req.params.courseId;
    let courseData = extractCourseData(req);

    courseService.updateOne(courseId, courseData)
        .then(() => {
            res.redirect(`/course/${courseId}/details`)
        })
        .catch(next)
});


function extractCourseData(req) {
    let { title, description, imageUrl, isPublic } = req.body;
    let courseData = {
        title,
        description,
        imageUrl,
        isPublic: isPublic == 'on' ? true : false
    };

    return courseData;
};


module.exports = router;