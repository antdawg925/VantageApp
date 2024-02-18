// IMPORT MONGOOSE
const mongoose = require('mongoose');

// 2. connect to DB
module.exports = (DB_NAME) => {
    mongoose.connect('mongodb://localhost/' + DB_NAME, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => console.log(`Connected to ${DB_NAME} db `))
        .catch(err => console.log('Error connection g to db ****', err));
}
