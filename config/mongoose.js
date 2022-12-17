const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mani:md2001@projectcluster.tx9gp0v.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to DB'));
db.once('open', function() {
    console.log('Successfly connected to the database');
});

module.exports= db;