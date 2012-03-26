module.exports = function (obj1) {
        this.obj1 = obj1;
        this.result = {};
        this.add = function (obj2) {
            this.result = mergeTemplateData(this.obj1, obj2);
            return this;
        };
     
        var mergeTemplateData = function (obj1, obj2) {
             var obj3 = { 
                locals : {}, 
                partials : {} 
            }, attrname;
            
            for (attrname in obj1.locals) { 
                obj3.locals[attrname] = obj1.locals[attrname]; 
            }
            
            for (attrname in obj1.partials) { 
                obj3.partials[attrname] = obj1.partials[attrname]; 
            }
            for (attrname in obj2.locals) { 
                obj3.locals[attrname] = obj2.locals[attrname]; 
            }
            for (attrname in obj2.partials) { 
                obj3.partials[attrname] = obj2.partials[attrname]; 
            }

            return obj3;
        }; 
    };
   /* mergeTemplateData : function (obj1, obj2) {
        var obj3 = { 
            locals : {}, 
            partials : {} 
        }, attrname;
        
        for (attrname in obj1.locals) { 
            obj3.locals[attrname] = obj1.locals[attrname]; 
        }
        
        for (attrname in obj1.partials) { 
            obj3.partials[attrname] = obj1.partials[attrname]; 
        }
        for (attrname in obj2.locals) { 
            obj3.locals[attrname] = obj2.locals[attrname]; 
        }
        for (attrname in obj2.partials) { 
            obj3.partials[attrname] = obj2.partials[attrname]; 
        }

        return obj3;
    }
};*/
