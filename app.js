const express = require('express');
const cors = require('cors');
const users = require('./routes/Users');
const games = require('./routes/Games');
const path = require('path')

require('custom-env').env(process.env.NODE_ENV, './Config');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, 
                {   useNewUrlParser: true, 
                    useUnifiedTopology: true });

var app = express();

const session = require('express-session');
app.    use(session({
    secret: 'foo',
    saveUninitialized: false,
    resave: false
}))

app.use(express.static('./'));
app.use(express.static('View'));
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs", "css");
app.set('views', path.join(__dirname,'View'));
app.use(express.urlencoded({ extended: false }));  
app.use("/", users);
app.use("/", games);

app.listen(process.env.PORT);