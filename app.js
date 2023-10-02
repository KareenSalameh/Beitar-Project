const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/Users');
const path = require('path')

require('custom-env').env(process.env.NODE_ENV, './Config');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, 
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

var app = express();

const session = require('express-session');
app.use(session({
    secret: 'foo',
    saveUninitialized: false,
    resave: false
}))

// app.use(express.static('View'));
app.use(cors());
// app.use(bodyParser.urlencoded({extended : true}));   
app.use(express.json());

app.set("view engine", "ejs");
app.set('views', path.join(__dirname,'View'));
app.use(express.urlencoded({ extended: false }));  
app.use("/", users);

app.listen(process.env.PORT);