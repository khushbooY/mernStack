var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
var process = require('process')

const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const MongoClient = require('mongodb').MongoClient;
//Fill your mongodb password
const uri = "mongodb+srv://khushboo:<password>@cluster0-6iy1f.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(err)
    // client.close();
});


var opener = require("opener");

opener("http://localhost:3003");



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function (req, res) {
    var Name = req.body.Name;
    var password = req.body.password;

    // var phone = req.body.phone;

    // console.log("Record inserted Successfully REQ", req);

    var db = client.db("signUP")
    var myData = {
        "Name": Name,
        "password": password
    }

    console.log("Record inserted Successfully sign", req.body);
    db.collection('signUp').find({ "Name": Name, "password": password }).count().then((data) => {
        console.log("DTAA", data)
        if (data) {
            return res.send("ALREADY EXISTS")


        } else {
            db.collection('signUp').insertOne(req.body, function (err, collection) {
                if (err) throw err;
                console.log("Record inserted Successfully", myData, err);
                return res.send("RECORD iNSERT SUCEESSFULLY")

            });
        }

    })




    // return res.redirect('signup_success.html');
})

app.post('/loginIn', (req, res) => {
    var Name = req.body.Name;
    var password = req.body.password;
    var db = client.db("signUP")

    console.log("Record inserted Successfully login", req.body);
    var myData = {
        "Name": Name,
        "password": password
    }



    db.collection('signUp').find({ "Name": Name, "password": password }).count().then((data) => {
        console.log("DTAA", data)
        if (data) {
            return res.send("LOGIN SUCEESSFULLY")


        } else {
            return res.send("PLEASE SIGNUP")
        }
        // db.collection('signUp').find({ "Name": Name, "password": password }).count().then((data) => {
        //     console.log("DTAA", data)
        //     if (data) {
        //         return res.send("LOGIN SUCEESSFULLY")


        //     } else {

        //         return res.send("PLEASE SIGNUP")


        //     }

    })

})


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // console.log("HERE", path.join(__dirname, 'public', 'index.html'))
})



app.listen(process.env.PORT || 3003)
console.log(process.env.PORT || 3003)

