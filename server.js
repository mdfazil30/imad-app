var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var page = {
    profilePg: 'Profile',
    homePg: 'Home',
    indexPg: 'Index'
};

function createHTML(data) {
    var templatePg = data.templatePg;
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

app.get('/profile', function (req, res) {
    res.send(createHTML(page[profilePg]));
});

app.get('/home', function (req, res) {
   res.send(createHTML(page[homePg]));
});

app.get('/index', function (req, res) {
    res.send(createHTML(page[indexPg]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
