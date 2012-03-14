var server; 

describe("template engine", function () {

    var tmpl = require("../../../lib/tmpl");

    it("can replace locals", function () {
        var result,
        data = {
            locals : {
                name : "Nukul"
            }   
        },
        source = "{{name}} wrote this";
        result = tmpl.render(source, data);
        expect(result).toEqual("Nukul wrote this");
    });

    it("can replace locals and escape locals", function () {
        var result,
        data = {
            locals : {
                name : "Nukul <Bhasin"
            }   
        },
        source = "{{name}} wrote this";
        result = tmpl.render(source, data);
        expect(result).toEqual("Nukul &lt;Bhasin wrote this");
    });

    it("can replace partials", function () {
        var result,
        data = {
            partials : {
                name : "Nukul"
            }   
        },
        source = "{{> name}} wrote this";
        result = tmpl.render(source, data);
        expect(result).toEqual("Nukul wrote this");
    });

    it("does not escape characters in local", function () {
        var result,
        data = {
            partials : {
                name : "Nukul <Bhasin"
            }   
        },
        source = "{{> name}} wrote this";
        result = tmpl.render(source, data);
        expect(result).toEqual("Nukul <Bhasin wrote this");
    });
});
