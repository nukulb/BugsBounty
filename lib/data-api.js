var database = require('./database');

var _self = {

    lpUserAdd : function (req, res) {
        var errors = [];

        req.onValidationError(function (msg) {
            console.log('Validation error: ' + msg);
            errors.push(msg);
            return this;
        });
        req.assert('email', 'Invalid email').isEmail();

        req.sanitize('name').trim();
        req.sanitize('name').xss();
        req.sanitize('email').trim();


        database.query(
            'INSERT INTO lp_user ' +
                'SET name = ?, email = ?',
                [ req.param('name'), req.param('email') ]
        );

        return errors;
    }
}

module.exports = _self;
