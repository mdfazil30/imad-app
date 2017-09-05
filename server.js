var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var config = {
    user: 'mdfazil30',
    database: 'mdfazil30',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var page = {
    'profile': 'Profile',
    'home': 'Home',
    'index': 'Index'
};

function createHTML(data) {
    var templatePg = data;
var html = `
    <!doctype html>
<html>
    <head>
        <title>${templatePg} | MySite</title>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class = "container">
            <h1>
                ${templatePg}
            </h1>
            <p>
                ${templatePg} content should go here!
            </p>
        </div>
    </body>
</html>
`;
return html;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/page/:pgName', function (req, res) {
    var pgName = req.params.pgName;
    res.send(createHTML(page[pgName]));
});

var count = 0;

app.get('/counter', function(req, res) {
    count = count + 1;
    res.send(count.toString());
});

app.get('/ui/main.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var pool = new Pool(config);
app.post('/user', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, password], function(req, res) {
       if(err) {
           res.status(500).send(err.toString());
       } else {
           res.send('User created successfully: ' + username);
       }
    });
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
