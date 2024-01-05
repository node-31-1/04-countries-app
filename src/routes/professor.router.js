const { getAll, create, getOne, remove, update, setProfessorStudents } = require('../controllers/professor.controllers');
const express = require('express');

const professorRouter = express.Router();

professorRouter.route('/professors')
    .get(getAll)
    .post(create);

professorRouter.route('/professors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

professorRouter.route('/professors/:id/students')
    .post(setProfessorStudents);

module.exports = professorRouter;