const mongoose = require('mongoose');

const config = require('./config');

module.exports = () => {
    mongoose
        .connect(config.mongoUri, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology:true,
            useCreateIndex: true
        })
        .then(() => console.log('MongoDB has been connected'))
        .catch((e: any) => console.log(e));
};
export {};
