var email = require("mailer");

var _self = {
    sendEmail : function (req, res) {
        var errors = [];
        req.onValidationError(function (msg) {
            errors.push(msg);
            return this;
        });
        
        //req.assert('toEmail', 'Invalid email').isEmail();

        //req.assert('subject').trim();

        email.send({
            ssl: true,
            host : "smtp.gmail.com",              // smtp server hostname
            port : 465,                     // smtp server port
            domain : "[127.0.0.1]",            // domain used by client to identify itself to server
            to : "me@nukulb.com,me@jasondscott.com",
            from : "team@bugsbounty.com",
            subject : "This is nukul- reply if you got this",
            reply_to:"team@bugsbounty.com",
            //body: "Hello! This is a test of the node_mailer.",
            template : "./email-templates/new-signup.txt",   // path to template name
            data : {
                "username": "Billy Bob",
                "color": function(){
                    var arr = ["purple", "red", "green", "yello"];
                    return arr[Math.floor(Math.random()*3)];
                },
                "animal": "monkey",
                "adverb": "quickly",
                "noun": "hot lava"
            },

            authentication : "login",        // auth login is supported; anything else is no auth
            username : "team@bugsbounty.com",            // username
            password : "Whatdoyoumean8",            // password
            debug: true                      // log level per message
        },
        function(err, result){
            if(err){ console.log(err); }
        });
        
        return [];
    }, 
    
    sendSignupEmail : function (data) {

        email.send({
            ssl: true,
            host : "smtp.gmail.com",
            port : 465,
            domain : "[127.0.0.1]", 
            to : "me@nukulb.com,me@jasondscott.com,cruz.rowell@gmail.com",
            from : "team@bugsbounty.com",
            subject : "Someone signed up for bugs bounty",
            reply_to:"team@bugsbounty.com",
            template : "./email-templates/new-signup.txt",
            data: data,
            authentication : "login",
            username : "team@bugsbounty.com",
            password : "Whatdoyoumean8",
            debug: true
        },
        function(err, result){
            if(err){ console.log(err); }
        });
        
        return [];
    }
};

module.exports = _self;
