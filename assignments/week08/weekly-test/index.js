
var express = require('express');
var app = express();
//Setting PORT variable
var port = 3000;

//bodyParser Setup
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static asset folder declaration
app.use(express.static('public'));


//template engine setup
var hbs = require('hbs');
app.set('view engine', 'hbs');


//mongodb Setup
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var DbName = 'attainu';
var db;

//connecting to database
MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    console.log('DB connected')
    db = client.db(DbName);
})

//setting object id variable
ObjectId = require('mongodb').ObjectID

//GET route to Render HomePage
app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'AttainU'
    })
})
//GET route to Render Add Student Page
app.get('/getAddStudent', (req, res) => {
    res.render('addstudent.hbs', {
        title: 'Add Student',
        script: 'js/addstudent.js'
    });
})
//GET route to Render Add Instructor Page
app.get('/getAddInstructor', (req, res) => {
    res.render('addinstructor.hbs', {
        title: 'Add Instructor',
        script: 'js/addinstructor.js'
    });
})
//POST route for Adding Student
app.post('/addStudent', (req, res) => {
    var obj = req.body;
    db.collection('students').insertOne(obj), function (err, data) {
        if (err) throw err
    }
    res.redirect('/getAddStudent')
})
//POST route for adding Instructor
app.post('/addInstructor', (req, res) => {
    var obj = req.body;
    db.collection('instructors').insertOne(obj), function (err, data) {
        if (err) throw err
    }
    res.redirect('/getAddInstructor')
})
//GET route to render students Data
app.get('/students', (req, res) => {
    db.collection('students').find({}).toArray(function (err, data) {
        if (err) throw err
        res.render('students.hbs', {
            title: 'AttainU Students',
            script: 'js/students.js',
            data: data
        })
    })
})

//DELETE route to delete Student From Database
app.delete('/students/student/:id', (req, res) => {
    db.collection('students').deleteOne({ _id: ObjectId(req.params.id) }, function (err, data) {
        if (err) throw err
    })
})
//GET route to render instructors Data
app.get('/instructors', (req, res) => {
    db.collection('instructors').find({}).toArray(function (err, data) {
        if (err) throw err
        res.render('instructors.hbs', {
            title: 'AttainU Instructors',
            script: 'js/instructors.js',
            data: data
        })
    })
})
//DELETE route to delete Instructors From Database
app.delete('/instructors/instructor/:id', (req, res) => {
    db.collection('instructors').deleteOne({ _id: ObjectId(req.params.id) }, function (err, data) {
        if (err) throw err
    })
})

app.listen(port), console.log('See Magic On Port : ' + port)