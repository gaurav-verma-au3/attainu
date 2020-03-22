var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => {
    res.json({
        message : "server is running",
        port : port
    })
})
app.get('/page',(req,res) =>{
    res.sendFile(__dirname +'/page.html')
})
app.listen(port)