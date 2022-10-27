const express = require('express');
const app = express();
const path = require('path');
const todoRouter = require('./routes/todo');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req,res, next)=>{
    next();
})

app.use(todoRouter);

mongoose
    .connect(process.env.MONGO_PASS)
    .then(result=>{
        app.listen(4000);
    })
    .catch(err=>{
        console.log(err);
    })