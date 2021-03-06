var database = require('./database'),
    email = require('./email-api');

var _self = {

    lpUserAdd : function (req, res, callback) {
        var errors = [],
            client;
        req.onValidationError(function (msg) {
            errors.push(msg);
            return this;
        });
        req.assert('email', 'A valid email address is required to signup').isEmail();

        req.sanitize('name').trim();
        req.sanitize('name').xss();
        req.sanitize('email').trim();
        if (errors.length) {
            callback(errors);
        }
        
        client = database.create();
        (function (errors) { 
            client.query(
            'INSERT INTO LP_USER ' +
                'SET name = ?, email = ?, platform_ios = ?, platform_blackberry = ?,' +
                 'platform_android = ?, platform_windows = ?, tester = ?, developer = ?',
                [ req.param('name'), req.param('email'), !!req.param('platform_ios'),
                  !!req.param('platform_blackberry'), !!req.param('platform_android'), 
                  !!req.param('platform_windows'), !!req.param('tester'), 
                  !!req.param('developer') ], function selectCb(err, results, fields) {
                    if (err) {
                        errors.push(err);
                    }
                    if (!errors.length) {
                        email.sendSignupEmail({
                            name: req.param('name'),
                            email: req.param('email'),
                            role: !!req.param('tester') ? 'tester' : 'developer'
                        });             
                    }
                    
                    client.end();
                    callback(errors);
                });
        } (errors));

    }
};

module.exports = _self;
