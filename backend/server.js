var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality
app.use(express.json());
app.use(express.urlencoded({extended:true}));
var path = require('path');
let staticpath = path.resolve('../frontend/www');
app.use(express.static(staticpath));

require('./routes/homepage.js').route(app,path);
require('./routes/account.js').route(app,path);
require('./routes/api-login.js').route(app);
require('./listen.js').start(app);