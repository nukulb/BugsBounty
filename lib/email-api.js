var email = require("mailer");

var _self = {
    sendEmail : function (req, res) {
        email.send({
            ssl: true,
            host : "smtp.gmail.com",              // smtp server hostname
            port : 465,                     // smtp server port
            domain : "[127.0.0.1]",            // domain used by client to identify itself to server
            to : "me@nukulb.com",
            from : "team@bugsbounty.com",
            subject : "node_mailer test email",
            reply_to:"team@bugsbounty.com",
            body: "Hello! This is a test of the node_mailer.",
            authentication : "login",        // auth login is supported; anything else is no auth
            username : "team@bugsbounty.com",            // username
            password : "Whatdoyoumean8",            // password
            debug: true                      // log level per message
        },
        function(err, result){
            if(err){ console.log(err); }
        });
        
        return [];
    }
};

module.exports = _self;
