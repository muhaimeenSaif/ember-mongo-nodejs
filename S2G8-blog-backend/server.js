require('./models/dbConnection');

var express = require('express');
var app = express();

const postsController =require('./controllers/postController');

// body-parser will allow us to read form contents.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// setup important server stuff
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers",
    "X-Requested-With,X-HTTP-Methods-Override,Content-Type,Accept,Cache-Control,Pragma,Origin,Authorization,Content-Type"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if ('OPTIONS' == req.method) {
    return res.sendStatus(200);
  }
  next();
});

// New lines!
app.get('/api/',function (req,res) {
  res.send('working');
});
app.listen('4500');

app.use('/api/posts',postsController);
