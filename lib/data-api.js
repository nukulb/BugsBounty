var database = require('./database');

var _self = {

    lpUserAdd : function (req, res) {
        var errors = [];
        req.onValidationError(function (msg) {
            errors.push(msg);
            return this;
        });
        req.assert('email', 'Invalid email').isEmail();

        req.sanitize('name').trim();
        req.sanitize('name').xss();
        req.sanitize('email').trim();
        
        database.query(
            'INSERT INTO LP_USER ' +
                'SET name = ?, email = ?, platform_ios = ?, platform_blackberry = ?,' +
                 'platform_android = ?, platform_windows = ?, tester = ?, developer = ?',
                [ req.param('name'), req.param('email'), !!req.param('platform_ios'),
                  !!req.param('platform_blackberry'), !!req.param('platform_android'), 
                  !!req.param('platform_windows'), !!req.param('tester'), 
                  !!req.param('developer') ]
        );

        return errors;
    }
};

module.exports = _self;
