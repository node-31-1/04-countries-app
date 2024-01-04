const catchError = require('../utils/catchError');
const User = require('../models/User');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll({ include: [Country] });
    return res.json(users);
});

const create = catchError(async(req, res) => {
    const { name, email, countryId, phone } = req.body;
    const user = await User.create({ name, email, countryId, phone });
    return res.status(201).json(user);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id); 
    return res.json(user);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id: id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { name, email, countryId, phone } = req.body;
    const user = await User.update(
        { name, email, countryId, phone },
        { where: { id }, returning: true },
    );
    return res.json(user[1][0]);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}
