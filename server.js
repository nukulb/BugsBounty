//creating a server with express.
var express = require('express');
var app = express.createServer();


app.get("/user/:id", function (req,res, next){
    //lookup in database and send the :id back
    //let us assume we only support positive natural numbers for id values , reasonable assumption
    if(req.params.id < 1){
        res.send('Looked up user ' + req.params.id);
    } else {
        //pass the baton to the next app.get so now "lets try /user/* method right below this method.
        //basically that means that if you did not find an id, it would then go the next method.
        next();
    }
});

app.get("/user/*", function (req, res, next) {
    res.send("No such user was found.");
});

app.post('/', function(req, res){
    res.send(req.body);
});

//setup a static server
app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    //this is all you have to setup a static server, the public folder is now exposed.
    app.use(express.static(__dirname + '/public'));
});

app.listen('3000');
console.log('Server running at http://127.0.0.1:3000/');

