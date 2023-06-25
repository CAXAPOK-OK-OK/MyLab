const express = require('express');
const {
    insertUser,
    showUser,
    findbyidUser,
    showModel, createModel, 
    updateModel, deleteModel, 
    findByidModels, showKeys,
    checkKey, createKey
} = require('../services/services');
    const control = express.Router();
    const jsonParse = express.json();

    
control.post('/comments', jsonParse, insertUser);
control.get('/comments', showUser);
control.get('/comments/:id', findbyidUser);

control.get('/models', showModel);
control.get('/models/:id', findByidModels);

control.post('/keys', jsonParse, createKey);

control.post('/models', jsonParse, checkKey, createModel);
control.put('/models/:id', jsonParse, checkKey, updateModel);
control.delete('/models/:id', checkKey, deleteModel);

module.exports = control;