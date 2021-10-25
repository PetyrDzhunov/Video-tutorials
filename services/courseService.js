const Course = require('../models/Course');

const getAll = () => Course.find({}).lean();

const getOne = (id) => Course.findById(id).lean();

const create = async(courseData) => {
    let course = await new Course({...courseData, createdAt: new Date() });
    return course.save();
};





module.exports = {
    create,
    getAll,
    getOne
}