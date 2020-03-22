var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session');
var MongoClient = require('mongodb').MongoClient
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'encryption',
    resave : true,
    saveUninitialized: true

}));
var port = 3000;

var db;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, function (err, client){
    if (err) throw err
    
    db = client.db('mydb')
})

app.get('/', (req,res) => {
if(req.session.loggedIn == true)  
    res.sendFile(__dirname +'/home.html')
    else{
        res.redirect('/login')
    }

})
app.get('/login', (req,res) => {
    res.sendFile(__dirname +'/login.html')
    
})
app.post('/loginauth', (req,res) => {
    var flag = false;
    
    db.collection('user').find({}).toArray(function(err, data) {
        if (err) throw err;
        
    for (var i = 0; i<data.length; i++){
    if (req.body.username == data[i].username && req.body.password == data[i].password)
    flag = true;
    break;
    }
    if(flag) {
        req.session.loggedIn = true;
        req.session.user = req.body.username;
        res.redirect("/");
    }
    else
        res.redirect("/login");
    })
})

app.get('/refresh', (req,res) => {
    db.collection('tweet').find({}).toArray(function(err, data) {
    if (err) 
      throw (err);
    res.json(data);
})
})

app.post('/postTweet', (req,res) => {
    db.collection('tweet').insertOne(req.body),function(err, data){
        if (err) throw err;
    }
    
    res.send("tweet added")
})


app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/')

})


app.listen(3000, console.log("see magic on: " + port));