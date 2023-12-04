const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/la-dolce-vita');

module.exports = mongoose.connection;
