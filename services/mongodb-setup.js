const mongoose = require('mongoose');

const DB_NAME = 'patchdemo';
const HOSTNAME = '127.0.0.1';

mongoose.Promise = Promise;

function mongodbSetup() {
    return new Promise((resolve, reject) => {
        mongoose.connect(`mongodb://${HOSTNAME}/${DB_NAME}`, (err) => err ? reject(err) : resolve());
    });
}

module.exports = mongodbSetup;