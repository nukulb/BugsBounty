var  XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest,
    childProcess = require('child_process'),
    app = require('./../../server.js');
describe("Server", function () {
    var handle;
    beforeEach(function () {
        //handle = childProcess.exec('node ../../../server.js');
    });

    afterEach(function () {
        //handle.kill(); 
    });
    
    it("can add users from the landing page", function() {
        var xhr = new XMLHttpRequest(),
            postParams;
            xhr.open("POST", "http://127.0.0.1:3000/lp/user/add",true);
            xhr.setRequestHeader("Content-type", "text/json");
            postParams = {
                name: "John Smith",
                email: "john@smith.com"
            };
            /*xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                     expect(xhr.responseText).toEqual('Success');
                }
            };*/
            
        runs(function () {
            console.log("Client:"+JSON.stringify(postParams));
            xhr.send(JSON.stringify(postParams));
        });
        waitsFor(function () {
                return !!xhr.responseText;
            }, "Error message if you don't make it here", 3000000
        ); 
        runs(function () {
            expect(xhr.responseText).toEqual('Success');
        });
    });
});
