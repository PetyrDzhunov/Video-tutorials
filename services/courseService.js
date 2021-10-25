const Course = require('../models/Course');

const create = async(courseData) => {
    let course = await new Course({...courseData, createdAt: new Date() });
    return course.save();
};

const getAll = () => Course.find({}).lean();




module.exports = {
    create,
    getAll
}