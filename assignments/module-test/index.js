var express = require('express');
var app = express();

//md5 Setup
var md5 = require('md5');
/**
* @description This function converts the buffer to data url
* @param {Object} req containing the field object
* @returns {String} The data url from the string buffer
*/




//view Engine
var hbs = require('hbs');
app.set('view engine', 'hbs');

//session object setup
var session = require('express-session');
app.use(session({
    secret: 'encryption',
    resave: true,
    saveUninitialized: true
}));

//Static Asset Declaration
app.use(express.static(__dirname + '/public'));

//bodyParser Setup
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

//Database
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017';
var DbName = 'moduleTest';
var db;

//connecting to DataBase
MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err, client) {
    if (err) throw err
    console.log('DB connected')
    db = client.db(DbName);
})

//importing ObjectId
ObjectId = require('mongodb').ObjectID

//port
var port = 3000;

//starting Server
app.listen(port);
console.log('play it on port : ' + port)

//static routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/public/signup.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

app.post('/login', (req, res) => {
    var flag = false;

    db.collection('users').find({ email: req.body.email }).toArray(function (err, data) {
        if (err)
            throw err;
        if (req.body.email == data[0].email && req.body.password == data[0].password) {
            flag = true;
            req.session.userid = data[0]._id;
        }
        if (flag) {
            req.session.loggedIn = true;
            req.session.userid = data[0]._id;
            req.session.name = data[0].name;
            res.redirect("/profile");
        }
        else res.redirect("/login")
    })
})



app.post('/signup', (req, res) => {

    var obj = {
        "name": req.body.name,
        "email": req.body.email,
        "mobile": req.body.mobile,
        "subscribed": req.body.subscribe,
        "password": req.body.password
    }
    db.collection('users').insertOne(obj),
        function (err, data) {
            if (err) throw err
        }
    res.redirect('/login')
})

app.get('/profile', (req, res) => {
    var subscribed
    if (req.session.loggedIn == true) {
        db.collection('users').find({
            _id: ObjectId(req.session.userid)
        }).toArray(function (err, data) {
            if (err) throw err;
            if (data[0].subscribed === 'on') {
                subscribed = 'yes'
            } else subscribed = 'no'
            var len = (data[0].password).length
            var maskPass = '*'.repeat(len)
            res.render('update.hbs', {
                title: "module test | " + req.session.name,
                script: '/update.js',
                data: data[0],
                username: req.session.name,
                subscribed: subscribed,
                pass: maskPass,
            })
        })
    } else {
        res.redirect('/login')
    }
})

//profile update

app.put('/profile/update', (req, res) => {
    if (req.session.loggedIn == true) {
        db.collection('users').findOneAndUpdate(
            { _id: ObjectId(req.session.userid) },
            {
                $set: {
                    "name": req.body.name,
                    "email": req.body.email,
                    "mobile": req.body.mobile,
                    "subscribed": req.body.subscribe,
                    "password": req.body.password
                }
            }
        )
    }
    else {
        res.redirect('/login')
    }
})