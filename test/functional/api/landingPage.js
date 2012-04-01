describe("Server", function () {

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
        database = require('./../../../lib/database'),
        server = require('./../../../server'),
        client;
    
    beforeEach(function () {
        client = {
            query: jasmine.createSpy().andCallFake(function (obj, params, cb) {
                if (cb)
                    cb();
            }),
            end: jasmine.createSpy()
        };
        spyOn(database, "create").andReturn(client);
        spyOn(console, "log");
        server.start(3000);
    });

    afterEach(function () {
        server.close();
    });

    it("can add users from the landing page", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/lpUserAdd.html", true);
        xhr.setRequestHeader("Content-Type", "application/json");
         
        runs(function () {
            xhr.send(JSON.stringify({name: "John Smith", email: "john@smith.com"}));
        });
        
        waits(250); 
        
        runs(function () {
            expect(database.create).toHaveBeenCalled();
            expect(client.query).toHaveBeenCalled();
            expect(client.end).toHaveBeenCalled();
        });
    });
    
    it("cannot add users with invalid email address", function () {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:3000/lpUserAdd.html", true);
        xhr.setRequestHeader("Content-Type", "application/json");
         
        runs(function () {
            xhr.send(JSON.stringify({name: "John Smith", email: "johnsmith.com"}));
        });
        
        waits(250); 
        
        runs(function () {
            expect(xhr.status).toEqual(500);
        });
    });
});
