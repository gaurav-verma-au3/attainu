var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session');
var MongoClient = require('mongodb').MongoClient
ObjectId = require('mongodb').ObjectID
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.set('view engine', 'hbs');
var port = 3000;
app.use(session({
    secret: 'encryption',
    resave: true,
    saveUninitialized: true
}));
var db;
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    db = client.db('mydb')
})
app.post('/loginauth', (req, res) => {
    var flag = false;
    db.collection('user').find({}).toArray(function (err, data) {
        if (err) { throw err }
        for (var i = 0; i < data.length; i++) {
            if (req.body.username == data[i].username && req.body.password == data[i].password) {
                flag = true;
                break;
            }
        }
        if (flag) {
            req.session.loggedIn = true;
            res.redirect("/");
        }
        else
            res.redirect("/login");
    })
})
app.get('/', (req, res) => {
    if (req.session.loggedIn == true) {
        res.render('main.hbs', {
            title: 'HomePage',
            style: 'main.css',
            script: 'main.js',
        })
    }
    else {
        res.redirect('/login')
    }
})
app.get('/getStudent/:hometown', (req, res) => {
    if (req.session.loggedIn == true) {
        db.collection('user').find({ hometown: req.params.hometown }).toArray((err, data) => {
            res.json(data)
        })
    }
})
app.get('/getStudent', (req, res) => {
    db.collection('user').find({ hometown: req.query.hometown }).toArray((err, data) => {
        res.json(data)
    })
})
app.put('/student', (req, res) => {
    db.collection('user').updateOne(
        { _id: ObjectId(req.query.id) },
        { $set: req.body }
    );
    res.send('successfully updated')
})
app.delete('/student', (req, res) => {
    db.collection('user').deleteOne({ _id: ObjectId(req.query.id) })
    res.send('deleted successfully')

})
app.get('/login', (req, res) => {
    res.render('login.hbs', {
        title: 'Login',
        style: 'login.css'
    })
})
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})
app.listen(3000, console.log("see magic on: " + port));