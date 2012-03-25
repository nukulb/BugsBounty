var email = require("mailer");

var _self = {
    
    sendEmail : function (data) {
        
        var errors = [];
        email.send({
            ssl: true,
            host : "smtp.gmail.com",
            port : 465,
            domain : "[127.0.0.1]", 
            to : data.to || 'team@bugsbounty.com',
            from : data.from || "team@bugsbounty.com",
            subject : data.subject || 'no subject was provided',
            reply_to : "team@bugsbounty.com",
            template : data.template, 
            data: data.data || {},
            authentication : "login",
            username : "team@bugsbounty.com",
            password : "Whatdoyoumean8",
            debug: false
        },
        function (err, result) {
            if (err) {
                console.log(err);
                errors.push(['Email failed.']);
            }
        });
        
        return errors;
    },

    feedbackEmail : function (req, res) {
        var errors = [], errors2;
        req.onValidationError(function (msg) {
            errors.push(msg);
            return this;
        });
        
        req.sanitize('text').trim();
        req.sanitize('name').trim();
        
        errors2 = this.sendEmail({
            to : "me@nukulb.com,me@jasondscott.com,cruz.rowell@gmail.com",
            subject : "Some feedback for us",
            template : "./email-templates/feedback.txt",
            data : { 
                text : req.param('text'), 
                name : req.param('name') + " " + req.param('email')
            }
        });
        return errors.concat(errors2);
    },

    sendSignupEmail : function (data) {

        var errors = this.sendEmail({
            to : "me@nukulb.com,me@jasondscott.com,cruz.rowell@gmail.com",
            subject : "Someone signed up for bugs bounty",
            template : "./email-templates/new-signup.txt",
            data : data
        });
        
        return errors;
    }
   
};

module.exports = _self;
