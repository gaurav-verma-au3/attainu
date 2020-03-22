var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var session = require('express-session');

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'encryption'
}));
var port = 3000;

var tweetDB = [];

var user = [
    {
        username: "this",
        password: "this"
    },
    {
        username: "that",
        password: "that"
    }
];
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
    for(var i = 0; i<user.length; i++){
    if (req.body.username == user[i].username && req.body.password == user[i].password)
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

app.get('/refresh', (req,res) => {
        res.json(tweetDB);
})

app.post('/postTweet', (req,res) => {

        var Obj = JSON.stringify(req.body)
        var dataObj = JSON.parse(Obj)
        tweetDB.splice(0, 0, dataObj)

        res.send("tweet added")
    })
app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/')

})


app.listen(3000, console.log("see magic on: " + port));