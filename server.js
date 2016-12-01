const express = require('express');
const swaggerSetup = require('./services/swagger-setup');
const mongodbSetup = require('./services/mongodb-setup');

const PORT = 3002;
const app = express();

Promise.resolve()
    .then(() => mongodbSetup())
    .then(() => swaggerSetup(app))
    .then(() => app.listen(PORT))
    .then(() => console.log(`Listening at port ${PORT}`))
    .catch(err => console.log(err));