var _self, app;

_self = {
    start: function (serverPort) {
        //creating a server with express.

        var express = require('express'),
            expressValidator = require('express-validator'),
            dataApi = require('./lib/data-api'),
            tmpl = require('./lib/tmpl');
        
        app = express.createServer();
        //setup a static server, make sure configure happens before you call req.body
        app.configure(function () {
            //app.use(express.methodOverride());
            app.use(express.bodyParser());
            app.use(expressValidator);
            //this is all you have to setup a static server, the public folder is now exposed.
            app.use(express.static(__dirname + '/public'));
            //app.set('view engine', 'handlebars');
            app.set("view options", { layout: false });
            app.set('views', __dirname + '/views');
            app.register('.html', tmpl); 
        });

        app.get("/example", function (req, res, next) {
            var context = {title: "My New Post", body: "Jason"};
            var template = handlebars.compile(require('./templates/example').data);
            var html = template(context);
           
            res.send(html);
        });
        
        app.get('/index5.html', function(req, res){

            var data = {
                title: "Ford Prefect",
                body: "a small planet somewhere in the vicinity of Betelgeuse"
            }

            res.render('index5.html', data);
        }); 
        app.get('/index.html', function(req, res){

            res.render('index.html', require('./templates/templates.js'));
        });

        app.post("/lpUserAdd.html", function (req, res, next) {
            var errors = dataApi.lpUserAdd(req, res);
            if (errors.length) {
                res.send('There have been validation errors: ' + errors.join(', '), 500);
                return;
            }
            res.redirect("/lpUserAdd.html");
            //res.send("Success");

        });

        app.post("/lp/user/add", function (req, res, next) {
            var errors = dataApi.lpUserAdd(req, res);
            if (errors.length) {
                res.send('There have been validation errors: ' + errors.join(', '), 500);
                return;
            }
            res.send("Success"); 

        });


        app.post("/", function (req, res, next) {
            res.send("Error"); 
        });

        app.listen(serverPort);
        console.log('Server running at http://127.0.0.1:' + serverPort + '/');
    },
        close: function () {
            app.close();
            //process.exit();
        }
};
module.exports = _self;

