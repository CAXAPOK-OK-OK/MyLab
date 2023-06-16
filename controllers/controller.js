const express = require('express');
const {
    insertUser,
    showUser,
    findbyidUser
} = require('../services/services');
    const control = express.Router();
    const jsonParse = express.json();

    
control.post('/comments', jsonParse, insertUser);
control.get('/comments', showUser);
control.get('/comments/:id', findbyidUser);

module.exports = control;