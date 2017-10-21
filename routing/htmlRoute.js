

var express  = require("express");
var app = express();
app.listen(3000);











function htmlRoute(){

app.get("/home",function(req,res){

	res.sendFile("../public/home.html");
});


app.get("/survey",function(req,res){

	res.sendFile("../public/survey.html");
});

}

module.exports = htmlRoute;
