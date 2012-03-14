var server; 

describe("template engine can replace", function () {

    var tmpl = require("../../lib/tmpl");

    it("can replace locals", function () {
        var result,
            data = {
                locals : {
                    name : "Nukul"
                }   
            },
            source = "{{name}} wrote this";
            result = tmpl.compile(source, data);
            expect(result).toEqual("Nukul wrote this");
    });

});
