const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => console.log('magic begins'))


const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const DbName = 'attainu';
let db;

//connecting to database
MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function (err, client) {
    if (err) throw err
    console.log('DB connected')
    db = client.db(DbName);
})

//setting object id variable
ObjectId = require('mongodb').ObjectID

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/welcome.html')
})

app.put('/:id', (req, res) => {
    console.log(req.body)
    db.collection('students').updateOne({ _id: ObjectId(req.params.id) }, { $set: { "languages": [req.body.lang1, req.body.lang2] } })

    res.send('successfully Updated')
})
