var express = require('express')
var app = express()
var port = 3000
app.use(express.json())

app.get('/', function(req, res){
res.json({ message : "welcome to calculator homepage"})
})
app.post('/add', function (req,res){
    var num01 =+ req.body.num1;
    var num02 =+ req.body.num2; 
    var answer = num01 + num02;
    res.json({
        "num1": num01,
        "num2": num02,
        "result": answer
    })
})
app.post('/sub', function (req,res) {
    var num01 =+ req.body.num1;
    var num02 =+ req.body.num2;
    var answer = num01-num02;
    res.json({
        num1 : num01,
        num2 : num02,
        result : answer
    })
})
app.post('/mul', function (req,res) {
    var num01 =+ req.body.num1;
    var num02 =+ req.body.num2;
    var answer = num01*num02;
    res.json({
        num1 : num01,
        num2 : num02,
        result : answer
    })
})
app.post('/div', function (req,res) {
    var num01 =+ req.body.num1;
    var num02 =+ req.body.num2;
    var answer = num01/num02;
    res.json({
        num1 : num01,
        num2 : num02,
        result : answer
    })
})
app.listen(port),console.log("See Magic on port : " +port);
