const express = require('express');
const router = express.Router();
const countryRouter = require('./country.router')

// colocar las rutas aquí
router.use(countryRouter);

module.exports = router;