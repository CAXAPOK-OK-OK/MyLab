const comments = require('../models/model');


async function insertUser(req, res){
    if (req.headers['content-type'] === 'application/json'){
        const user = new comments(req.body);
        user
        .save()
        .then(() => {
            res.status(201).json('Данные отправлены!');
        })
        .catch((err) => {
            res.status(500).send(err.message);
        })
    }else
    res.status(400).json('Неверный формат данных!');
}

async function showUser(req, res){
    comments
    .find()
    .then((comments) => {
        res.status(200).json(comments);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}

async function findbyidUser(req, res){
    const id = req.params.id;
    comments
    .findById(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(404).json('Несуществующий документ');
    })
}

module.exports = {
    insertUser, showUser,
    findbyidUser
}; 