const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articles');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error Connecting MongoDB"))

db.once('open', function(){
   console.log("Connected to Database : MongoDB")
});

module.exports = db;