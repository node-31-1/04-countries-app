const { getAll, create, remove, update } = require('../controllers/country.controllers');
const express = require('express');

const countryRouter = express.Router();

countryRouter.route("/countries")
    .get(getAll)
    .post(create);

countryRouter.route("/countries/:id")
    .delete(remove)
    .put(update);

module.exports = countryRouter;