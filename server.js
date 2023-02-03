const express = require('express');
const app = express();
const path = require('path');
const databaseConnection = require('./app');

app.listen(5000 , function() {
    console.log("server started.........5000");
})

// for ejs 
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, './views'));


//for static file
app.use('/assets' , express.static('assets'));

// for parsing the data
app.use(express.urlencoded({extended : false}));
app.use(express.json());

const blogRouts = require('./api/Routs/blogRouts')

app.use('/blog' , blogRouts);


databaseConnection(app);

module.exports = app