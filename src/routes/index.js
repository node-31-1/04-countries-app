const express = require('express');
const router = express.Router();
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const studentRouter = require('./student.router');

// colocar las rutas aquí
router.use(countryRouter);
router.use(userRouter);
router.use(cityRouter);
router.use(studentRouter);

module.exports = router;
