/**
 * Created by Imagemaker on 16/08/2017.
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if(err){
        console.log("Could not connect to database: ", err);
    }else{
        console.log(config.secret);
        console.log("Connected to database: " + config.db);
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World </h1><h2>Hello Efrain</h2>');
});

app.listen(8000, () => {
    console.log("Listening on port 8080");
});