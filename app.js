const express = require('express');
const morgan = require("morgan");
const helmet = require("helmet");


const HOST = '127.0.0.1'
const PORT = 3000;
const app = express();
const dbAPI = require('./controllers/controller.js')


app.use('/API', dbAPI);
app.use(express.static('./public'));
app.use(morgan('tiny'));

app.listen(PORT, HOST, () => {
    console.log(`Server is online on ${HOST}:${PORT}\nURL: http://www.localhost:${PORT}/API/1\nor\nURL: http://www.localhost:${PORT}/API/2`);
});


app.use(function (err, req, res, next) {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({ message: message });
});

app.use((req, res) => {
    res.status(400).send('Несуществующий url')
})










