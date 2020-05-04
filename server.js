var express = require ("express");
var bodyParser = require ("body-parser");
var fs = require("fs");
var app = express();
var server = require("http");
var path = require('path');
var dummyjson = require('dummy-json');
var router = express.Router();

app.use(express.static(path.join(__dirname,'/public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('*', function(req,res){
//res.send('hello worl');
//console.log('helloo '); 
res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
}); 

app.get('/public', function(req,res){
    res.send('hello worl');
   // console.log('hellosqfqsdqo '); 
});


var listener = app.listen(4600,function(req,res){
    console.log('Listening on port ' + listener.address().port);
    //res.redirect('/');
}); 

app.post('/app/jsonList',function(req,res){
    //var template = 
    //console.log(req);
    //res:
    
    //res.json({message: "it worked", data: req.body});
    res.json(req.body.template);
    //res.json({message: "it worked", data: req.body});
    //res.send({message: "it worked", data: req.body});
    });

