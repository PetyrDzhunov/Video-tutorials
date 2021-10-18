const mongoose = require('mongoose');
const { DB_URI } = require('./config');
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(DB_URI, dbOptions);

const db = mongoose.connection;

db.on('error', () => console.log('connection error'));
db.once('open', () => console.log('Database is connected'));

module.exports = db;