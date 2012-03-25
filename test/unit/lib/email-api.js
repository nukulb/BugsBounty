var server; 

describe("email engine", function () {

    var email = require("../../../lib/email-api");
    beforeEach(function () {
        spyOn(email, "sendEmail").andCallFake(function (data) {
            return data;
        });
    });

    it("can send signup email", function () {
        var data = {
            name : "Nukul"
        };
        email.sendSignupEmail(data);
        
        expect(email.sendEmail).toHaveBeenCalled();
    });

    it("can send feedback email", function () {
        var req = {
            onValidationError : jasmine.createSpy(),
            sanitize : function () {
                return { trim : jasmine.createSpy() };
            },
            param : jasmine.createSpy()
        },
        res = {};
        email.feedbackEmail(req, res);
        expect(email.sendEmail).toHaveBeenCalled();
    });
    
    it("cannot send feedback email when no text is provided", function () {
        var req = {
            onValidationError : jasmine.createSpy(),
            sanitize : function () {
                return { trim : jasmine.createSpy() };
            },
            param : jasmine.createSpy()
        },
        res = {},
        errors = email.feedbackEmail(req, res);
        expect(email.sendEmail).toHaveBeenCalled();
        expect(errors.length).toEqual(1);
    });
    
    it("cannot send feedback email when no name is provided", function () {
        var req = {
            onValidationError : jasmine.createSpy(),
            sanitize : function () {
                return { trim : jasmine.createSpy() };
            },
            param : jasmine.createSpy()
        },
        res = {},
        errors = email.feedbackEmail(req, res);
        expect(email.sendEmail).toHaveBeenCalled();
        expect(errors.length).toEqual(1);
    });
});
