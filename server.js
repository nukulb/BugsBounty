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
            path = require('path');
        
        app = express.createServer();
        //setup a static server, make sure configure happens before you call req.body
        app.configure(function () {
            //app.use(express.methodOverride());
            app.use(express.bodyParser());
            app.use(expressValidator);
            app.use(express.static(__dirname + '/public'));
            
            app.set("view options", { layout: false });
            app.set('views', __dirname + '/views');
            app.register('.html', tmpl); 
        });

        app.post("/lpUserAdd.html", function (req, res, next) {
            var errors = dataApi.lpUserAdd(req, res);
            if (errors.length) {
                res.send('There have been validation errors: ' + errors.join(', '), 500);
                return;
            }
            next();
        });
        
        app.post("/feedback", function (req, res, next) {
            var errors = email.feedbackEmail(req, res);
            if (errors.length) {
                res.send('There have been validation errors: ' + errors.join(', '), 500);
                return;
            }
            res.send("Success"); 

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
            var page = req.params.page,
                pageTmpl, tmpl, tmplPath;
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
        });
        
        app.get("/", function (req, res, next) {
            var pageTmpl = require('./templates/index.js'),
                tmpl = utils.mergeTemplateData(globalTmpl, pageTmpl);
            res.render('index.html', tmpl);
        });
        
        app.post("/*:page?", function (req, res, next) {
            var page = req.params.page,
                pageTmpl, tmpl, tmplPath;
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

