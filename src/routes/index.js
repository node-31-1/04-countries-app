const express = require('express');
const router = express.Router();
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const studentRouter = require('./student.router');
const professorRouter = require('./professor.router');
const courseRouter = require('./course.router');

// colocar las rutas aquí
router.use(countryRouter);
router.use(userRouter);
router.use(cityRouter);
router.use(studentRouter);
router.use(professorRouter);
router.use(courseRouter);

module.exports = router;
