var express = require('express');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser')
var session = require('express-session');
app.use(express.static('public'));
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'encryption',
    resave: true,
    saveUninitialized: true
}));
var user = require('./user.json')
var port = 3000;
var tweetDB = require('./tweets.json')
app.get('/', (req,res) => {
if(req.session.loggedIn == true)  
res.render('home.hbs', {
    title: 'Home',
    tweetDB: tweetDB,
    user: user
});

    else{
        res.redirect('/login')
    }

})
app.get('/login', (req,res) => {
    res.render('login.hbs', {
        title: 'Login',
        style: 'login.css',
    });
});

app.post('/loginauth', (req,res) => {
    var flag = false;
    for(var i = 0; i<user.length; i++){
    if (req.body.username == user[i].username && req.body.password == user[i].password){
    flag = true;
    break;
    }}
    if(flag) {
        req.session.loggedIn = true;
        req.session.user = req.body.username;
        res.redirect("/");
    }
    else
        res.redirect("/login");
})

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/')

})


app.listen(3000, console.log("see magic on: " + port));