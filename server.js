var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


app.use(express.static('app'));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


app.listen(process.env.PORT || 3000);