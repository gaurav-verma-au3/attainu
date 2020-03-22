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
    res.sendFile(__dirname +'/register.html')
    else{
        res.redirect('/login')
    }

})
app.get('/login', (req,res) => {
    res.sendFile(__dirname +'/login.html')
    
})
app.get('/register', (req,res) => {
    if(req.session.loggedIn == true)  
        res.sendFile(__dirname +'/register.html')
        else{
            res.redirect('/login')
        }
    
    })
    app.get('/login', (req,res) => {
        res.sendFile(__dirname +'/login.html')
        
    })
app.post('/loginauth', (req, res) => {
    var flag = false;
    console.log(req.body)
    db.collection('user').find({}).toArray(function (err, data) {
        
        if (err) {throw err}
            for (var i = 0; i < data.length; i++) {
            
            if (req.body.username == data[i].username && req.body.password == data[i].password){
            flag = true;
            break;
        }}
        if (flag) {
            req.session.loggedIn = true;
            res.redirect("/");
        }
        else
            res.redirect("/login");
    })
})
app.post('/register', (req,res) => {
    db.collection('user').insertOne(req.body),function(err, data){
        if (err) throw err;
        console.log(req.body)
    }
    res.redirect('/')
})


app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/')

})



app.listen(3000, console.log("see magic on: " + port));