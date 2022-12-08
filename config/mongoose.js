const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/habitTrackerdb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to DB'));
db.once('open', function() {
    console.log('Successfly connected to the database');
});

module.exports= db;