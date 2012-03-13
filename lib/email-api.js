//var email = require("mailer");
var email   = require("emailjs");

var server  = email.server.connect({
    user:    "team@bugsbounty.com", 
    password:"Whatdoyoumean8", 
    host:    "smtp.gmail.com", 
    ssl:     true

});
var _self = {
    sendEmail : function (req, res) {
        server.send({
            text:    "<html>i <i>hope</i> this works!</html>", 
            from:    "team@bugsbounty.com", 
            to:      "me@nukulb.com",
            subject: "testing emailjs"
        }, function(err, message) { console.log(err || message); });
        
        return [];
    }
};

module.exports = _self;
