//  Importing Modules for project
const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const port = 8001;

moment().format();

//   SCSS    //
app.use(sassMiddleware({
    src: path.join(__dirname, "./assets/sass"),
    dest: path.join(__dirname, "assets/css"),
    debug: false,
    outputStyle: 'compressed',
    prefix: '/css'
}));

app.use('/public', express.static(path.join(__dirname, 'public')));

//    EJS     //
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//    Static files   //
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, './assets')));

//  EJS Layout   //
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//    Routers   //
app.use('/', require('./routers'));

app.listen(port, function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Yup! My server is running on port:", port);
});