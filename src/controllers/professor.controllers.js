const catchError = require('../utils/catchError');
const Professor = require('../models/Professor');
const Student = require('../models/Student');

const getAll = catchError(async(req, res) => {
    const results = await Professor.findAll({ include: [ Student ]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Professor.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Professor.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Professor.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Professor.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

// 1. Buscar el profesor con el id de los parámetros ✅
// 2. Setear los estudiantes en el profesor ✅
// 3. Retornar los estudiantes insertados
const setProfessorStudents = catchError(async(req, res) => {
    const { id } = req.params;
    const professor = await Professor.findByPk(id);
    await professor.setStudents(req.body);
    const students = await professor.getStudents();
    return res.json(students);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setProfessorStudents,
}