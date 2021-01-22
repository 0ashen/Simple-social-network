const bodyParser = require('./body-parser');
const errors = require('./errors');
const catchMongooseErrors = require('./catch-mongoose-errors');
const passportInit = require('./passport-init');
const staticT = require('./static');

module.exports = [
    bodyParser,
    errors,
    catchMongooseErrors,
    passportInit,
    staticT
];
export {};
