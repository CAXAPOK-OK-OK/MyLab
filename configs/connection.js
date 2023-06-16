const URL = 'mongodb://127.0.0.1/web-lab';
const db = require('mongoose');

db
    .connect(URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting'));

module.exports = db;

