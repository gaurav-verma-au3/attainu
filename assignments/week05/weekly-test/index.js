var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var port = 3000;

var tweetDB = []
app.get('/', (req,res) => {
    res.sendFile(__dirname +'/home.html');

})
app.get('/refresh', (req,res) => {
        res.json(tweetDB);
})
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/postTweet', (req,res) => {

        var Obj = JSON.stringify(req.body)
        var dataObj = JSON.parse(Obj)
        tweetDB.splice(0, 0, dataObj)

        res.send("tweet added")
    })

app.listen(3000, console.log("see magic on: " + port));