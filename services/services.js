const users = require('../models/users');
const models = require('../models/models');
const keys = require('../models/keys');


async function insertUser(req, res){
    if (req.headers['content-type'] === 'application/json'){
        const user = new users(req.body);
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
    users
    .find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    })
}

async function findbyidUser(req, res){
    const id = req.params.id;
    users
    .findById(id)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(404).json('Несуществующий документ');
    })
}

async function findByidModels(req, res){
    const id = req.params.id;
    models
        .findById(id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(404).json('Несуществующий документ')
        })
}

async function showModel(req, res){
    models
        .find(/* {}, '__id modelName' */)
        .then((models)=>{
            res.status(200).json(models);
        })
        .catch((err) => {
            res.ststus(500).send(err.message);
        })
}

async function createModel(req, res){
    const model = new models(req.body);
    model
        .save()
        .then(() => {
            res.status(201).json('model create');
        })
        .catch((err) => {
            res.stus(500).send(err.message);
        })
}

async function updateModel(req, res, next){
    try {
    if (req.headers["content-type"] === "application/json") {
        const id = req.params.id;
        body = req.body;
        models
            .findByIdAndUpdate(id, {
                userName: body.userName,
                modelName: body.modelName,
                type: body.type,
                object: body.object,
                description: body.description,
                comments: body.comments,
                updateDate: Date.now()
            })
            .then((result) => {
                if (result) {
                    res.status(200).json("Данные успешно обновлены");
                } else {
                    const error = new Error("Документа не существует");
                    error.statusCode = 400;
                    throw error;
                }
            })
            .catch((err) => {
                res.status(404).json(err.message);
            });
    } else {
        const error = new Error("Данные должны быть в формате json");
			error.statusCode = 400;
			throw error;
    }
    } catch (err) {
        next(err);
    }
}

async function deleteModel(req, res, next){
    try{const id = req.params.id;
    models
        .findByIdAndDelete(id)
        .then((result) => {
            if(result){
                res.status(200).json('model delete');
            } else {
                const error = new Error("Документа не существует");
				error.statusCode = 400;
				throw error;
            }
        })
        .catch((err) => {
            res.status(404).json(err.message);
        })}
        catch (err) {
            next(err);}
}

async function showKeys(req, res){
    keys
        .find()
        .then((keys)=>{
            res.status(200).json(keys);
        })
        .catch((err) => {
            res.ststus(500).send(err.message);
        })
}

async function createKey(req, res, next) {
    const key = new keys(req.body);
    key
        .save()
        .then(() => {
            res.status(201).json('key create')
        })
        .catch((err) => {
            res.status(500).send(err.message)
        })
}

function checkKey(req, res, next) {
    try{
        const apiKey = req.query.userKey;
        keys
            .findOne({userKey: apiKey})
            .then((result) => {
                if (result){
                    next();
                } else {
                    const Error = new Error("key wrong");
                    error.statusCode = 401;
                    throw Error;
                }
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    insertUser, showUser,
    findbyidUser, 
    showModel, createModel, 
    updateModel, deleteModel,
    findByidModels, showKeys, 
    checkKey, createKey
}; 