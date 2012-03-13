describe("Server", function () {

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
        database = require('./../../../lib/database'),
        server = require('./../../../server');
    
    beforeEach(function () {
        spyOn(database, "query");
        spyOn(console, "log");
        server.start(3000);
    });

    afterEach(function () {
        server.close();
    });

    it("can add users from the landing page", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/lp/user/add", true);
        xhr.setRequestHeader("Content-Type", "application/json");
         
        runs(function () {
            xhr.send(JSON.stringify({name: "John Smith", email: "john@smith.com"}));
        });
        
        waitsFor(function () {
                return !!xhr.responseText;
            }, "Error message if you don't make it here", 3000000); 
        
        runs(function () {
            expect(xhr.responseText).toEqual('Success');
            expect(database.query).toHaveBeenCalled();
        });
    });
    
    it("cannot add users with invalid email address", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/lp/user/add", true);
        xhr.setRequestHeader("Content-Type", "application/json");
         
        runs(function () {
            xhr.send(JSON.stringify({name: "John Smith", email: "johnsmith.com"}));
        });
        
        waitsFor(function () {
                return !!xhr.responseText;
            }, "Error message if you don't make it here", 3000000); 
        
        runs(function () {
            expect(xhr.status).toEqual(500);
        });
    });
});
