var express = require('express')
var app = express()
var port = 3000

app.get('/add/:num1/:num2', (req,res) => {
    var sum = parseInt(req.params.num1) + parseInt(req.params.num2);
    res.json({ Sum : sum });
});

app.get('/sub/:num1/:num2', (req,res) => {
    var sub = parseInt(req.params.num1) - parseInt(req.params.num2);
    res.json({ Substraction : sub });
});

app.get('/mul/:num1/:num2', (req,res) => {
    var mul = parseInt(req.params.num1) * parseInt(req.params.num2);
    res.json({ Multiplication : mul });
});

app.get('/div/:num1/:num2', (req,res) => {
    var div = parseInt(req.params.num1) / parseInt(req.params.num2)
    res.json({ Division : div });
});




app.listen(port, function(){console.log("listening on port 3000" )});