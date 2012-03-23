var database = require('./database'),
    email = require('./email-api');

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
        if (errors.length) {
            res.send('There have been validation errors: ' + errors.join(', '), 500);
        }
        database.users.save({ 
                name: req.param('name'), 
                email: req.param('email'),
                platform_android: !!req.param('platform_android'),
                platform_ios: !!req.param('platform_ios'),
                platform_blackberry: !!req.param('platform_blackberry'),
                platform_windows: !!req.param('platform_windows'),
                role: !!req.param('tester') ? 'tester' : 'developer'
            }, function (err, saved) {
                if (err || !saved) {
                    console.log("User not saved");
                    errors.push(err || "User not saved");
                }

                if (errors.length) {
                    res.send('There have been validation errors: ' + errors.join(', '), 500);
                } else {
                    email.sendSignupEmail({
                            name: req.param('name'),
                            email: req.param('email'),
                            role: !!req.param('tester') ? 'tester' : 'developer'
                    });
                    res.send("Success");
                } 
            });

        return errors;
    }
};

module.exports = _self;
