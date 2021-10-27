const Course = require('../models/Course');

const getAll = () => Course.find({}).sort({ createdAt: -1 }).lean();

const getOne = (id, userId) => Course.findById(id)
    .then(course => {
        course.isEnrolled = course.usersEnrolled.includes(userId);
        return course;
    });


const create = (courseData) => {
    let course = new Course({...courseData, createdAt: new Date() });
    return course.save();
};

const enrollUser = (courseId, userId) => {
    return Course.findById(courseId)
        .then(course => {
            course.usersEnrolled.push(userId);
            return course.save();
        });
};




module.exports = {
    create,
    getAll,
    getOne,
    enrollUser
}