var _self, app;

_self = {
    start: function (serverPort) {
        //creating a server with express.

        var express = require('express'),
            expressValidator = require('express-validator'),
            dataApi = require('./lib/data-api'),
			tmpl = require('./lib/tmpl'),
            email = require('./lib/email-api'),
            utils = require('./lib/utils'),
            globalTmpl = require('./templates/global'),
            path = require('path'),
            auth = require('./lib/auth');
        
        app = express.createServer();
        //setup a static server, make sure configure happens before you call req.body
        app.configure(function () {
            app.use(express.methodOverride());
            app.use(express.bodyParser());
            app.use(expressValidator);
            app.use(express.static(__dirname + '/public'));
            
            app.set("view options", { layout: false });
            app.set('views', __dirname + '/views');
            app.register('.html', tmpl); 
            
            app.use(express.cookieParser());
            app.use(express.session({store: require('connect').session.MemoryStore({
                reapinterval: 600000
            }),
                secret: 'Not a secret'
            }));
        });
        
        function getTmpl(page) {
            var pageTmpl, tmpl, tmplPath;
            tmplPath = './templates/' + page.replace('.html', '.js');
            if (path.existsSync(tmplPath)) {
                pageTmpl = require(tmplPath);
            } else {
                pageTmpl = {locals: {}, partials: {}};
            }
            return utils.mergeTemplateData(globalTmpl, pageTmpl);
        } 
        
        function requiresLogin(req, res, next) {
            if(req.session.user) {
                next();
            } else {
                res.redirect('/login.html');
            }
        }
        function renderPage(req, res, next) {
            var page = req.params.page,
            pageTmpl, tmpl, tmplPath;
            if (page.substr(0,7) === 'session') {
                if (!req.session.user) {
                    res.redirect('/login.html');
                    return;
                }
                console.log("logged in as "+ req.session.user.name);
            }
            if (page.substr(page.length - 5) === '.html') { 
                tmplPath = './templates/' + page.replace('.html', '.js');
                if (path.existsSync(tmplPath)) {
                    pageTmpl = require(tmplPath);
                } else {
                    pageTmpl = {locals: {}, partials: {}};
                }
                tmpl = utils.mergeTemplateData(globalTmpl, pageTmpl);
                res.render(page, tmpl);
            } else {
                next();
            }
        }
        app.post("/lpUserAdd.html", function (req, res, next) {
            var errors = dataApi.lpUserAdd(req, res);
            if (errors.length) {
                res.send('There have been validation errors: ' + errors.join(', '), 500);
                return;
            }
            next();
        });
       
        app.post("/session.html", function (req, res, next) {
            auth.sessionAuth(function (user) {
                req.session.user = user;
                console.log('Authenticated user='+user.name);
                res.redirect('/session/user.html');
            }, function () {
                console.log('Auth failed');
                res.redirect('/login.html');
            }, req.param('user'), req.param('password'));
        });

        app.post("/session", function (req, res, next) {
            auth.sessionAuth(function (user) {
                req.session.user = user;
                console.log('Authenticated user='+user.name);
                res.redirect('/session/user.html');
            }, function () {
                console.log('Auth failed');
                res.redirect('/login.html');
            }, req.param('user'), req.param('password'));
        });

        app.post("/lp/user/add", function (req, res, next) {
            var errors = dataApi.lpUserAdd(req, res);
            if (errors.length) {
                res.send('There have been validation errors: ' + errors.join(', '), 500);
                return;
            }
            res.send("Success"); 
        });
        app.get("/*:page?", function (req, res, next) {
           renderPage(req, res, next); 
        });


        app.post("/*:page?", function (req, res, next) {
            renderPage(req, res, next); 
        });

        app.post("/", function (req, res, next) {
            // res.send("Error"); 
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

