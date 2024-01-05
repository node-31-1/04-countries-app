const { getAll, create, getOne, remove, update, setCourseStudents } = require('../controllers/course.controllers');
const express = require('express');

const courseRouter = express.Router();

courseRouter.route('/courses')
    .get(getAll)
    .post(create);

courseRouter.route('/courses/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

courseRouter.route('/courses/:id/students')
    .post(setCourseStudents);

module.exports = courseRouter;