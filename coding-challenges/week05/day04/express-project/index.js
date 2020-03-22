var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = 3000

var user = [
    {
        name : " ",
        phone : " "
    }

]
app.use(express.json());

app.get('/profile', (req,res) => {
    res.json(user);
})
app.post('/profile', (req,res) => {
    user.push({name : req.body.name, phone : req.body.phone})
    res.json(user)
});
app.put('/profile', (req,res) => {
    for (var i = 0; i<user.length; i++)
    if (req.body.name.toLowerCase() == user[i].name.toLowerCase() || req.body.phone.toLowerCase() == user[i].phone.toLowerCase())
    {   user[i].name = req.body.name;
        user[i].phone = req.body.phone;
        res.json(user)
    }
});
app.delete('/profile', (req,res) => {
    for (var i = 0; i<user.length; i++){
    if (req.body.name.toLowerCase() == user[i].name.toLowerCase()) 
    {
    user.splice(i, 1);   
    res.json(user);
    }
    }
});
app.listen(port),console.log("See Magic on port : " + port);