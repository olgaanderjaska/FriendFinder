const express = require('express');
const bodyParser = require('body-parser');

//importing our routs for html pages and api
const htmlRouters = require('./app/routing/htmlRouters.js');
const apiRouters = require('./app/routing/apiRouters.js');

var app = express();
//defining port to start fo Heroku and localhost
var PORT = process.env.PORT || 3000;

//defining body parser for parsing  user data
app.use(bodyParser.urlencoded({ extended: false }));

//declaring our routs
app.use('/', htmlRouters);
app.use('/api/friends', apiRouters);

//starting server
app.listen(PORT, () => {
    console.log('Listening on port 3000');
})