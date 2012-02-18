//creating a server with express.
var express = require('express'),
    app = express.createServer(),
    expressValidator = require('express-validator'),
    dataApi = require('./lib/data-api');

//setup a static server, make sure configure happens before you call req.body
app.configure(function () {
    //app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(expressValidator);
    //this is all you have to setup a static server, the public folder is now exposed.
    app.use(express.static(__dirname + '/public'));
});

app.get("/user/:id", function (req, res, next) {
    //lookup in database and send the :id back
    //let us assume we only support positive natural numbers for id values , reasonable assumption
    if (req.params.id < 1) {
        res.send('Looked up user ' + req.params.id);
    } else {
        //pass the baton to the next app.get so now "lets try /user/* method right below this method.
        //basically that means that if you did not find an id, it would then go the next method.
        next();
    }
});

app.post("/lp/user/add", function (req, res, next) {
   console.log(req); 
    console.log("Server:"+req.param('name')+" "+req.param('email'));
    var errors = dataApi.lpUserAdd(req,res);
    if (errors.length) {
        res.send('There have been validation errors: ' + errors.join(', '), 500);
        return;
    }
    res.send("Success"); 

});

app.post("/", function (req, res, next) {
    res.send("Error"); 
});

app.listen('3000');
console.log('Server running at http://127.0.0.1:3000/');
