const Course = require('../models/Course');

const getAll = () => Course.find({}).populate('usersEnrolled').sort({ createdAt: -1 }).lean();

const getOne = (id) => Course.findById(id).lean();


const create = async(courseData) => {
    let course = await new Course({...courseData, createdAt: new Date() });
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