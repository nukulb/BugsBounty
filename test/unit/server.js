var server; 

describe("server", function () {

    var express = require("express"),
        server = require("../../server");

    beforeEach(function () {
        spyOn(express, "createServer").andCallThrough();
        spyOn(express, "bodyParser").andCallThrough();
        spyOn(express, "static");
        spyOn(console, "log");
        server.start();
    });

    afterEach(function () {
        server.close();
    });

    it("can start an express server", function () {
        expect(express.createServer).toHaveBeenCalled();
    });

    /*it("can set up the body parser", function () {
       //console.log(express.bodyParser);
       expect(express.bodyParser).toHaveBeenCalled();
    });*/

    /*it("can set up the static file server", function () {
        //expect(express.static).toHaveBeenCalled();
    });*/

   
});
