var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var routing = require('./middleware/routing.mw');
// var api = require('./api'); //export object
// var prerender = require('prerender-node');



var clientPath = path.join(__dirname, '../client');

//talking to server = downloading front end
var app = express();
// app.use()
// function(req, res, next) {
//     next();
// }); //any request will trickle through here

// prerender.set('prerenderToken', 'process.env.PRERENDER_TOKEN');
// prerender.set('prerenderServiceUrl', 'http://localhost:1337/');

// app.use(prerender);
app.use(express.static(clientPath));
app.use(bodyParser.json()); // stores on req.body

// app.use('/api/', api);

app.get('*', routing.stateRouting);
app.listen(process.env.PORT || 3000);