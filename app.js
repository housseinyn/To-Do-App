const express =require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require('method-override');
const router = require('./routes/tasks');

app.use(methodOverride('_method', {methods: ['POST', 'GET']}));

app.set("viw engin", "ejs");

app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/testtodo', {
  useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
});

app.use('/', router);



 

app.listen(5000)