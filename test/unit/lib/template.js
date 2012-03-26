describe("template engine", function () {

    var Template = require("../../../lib/template");

    it("can replace locals", function () {
        var result,
            obj1 = {
                locals : {
                    thing1 : 'phone'
                },
                partials : {
                    thing2 : 'car'
                }
            },
            obj2 = {
                locals : {
                    thing3 : 'rent'
                },
                partials : {
                    thing4 : 'keys'
                }
            },
            obj3 = {
                locals : {
                    thing1 : 'phone',
                    thing3 : 'rent'
                },
                partials : {
                    thing2 : 'car',
                    thing4 : 'keys'
                }
            };
        result = (new Template(obj1)).add(obj2);
        expect(result.result).toEqual(obj3);
    });

    
});
