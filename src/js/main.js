System.register("module", [], function (exports_1, context_1) {
    "use strict";
    var TestModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TestModule = /** @class */ (function () {
                function TestModule() {
                    this.value = "Test value";
                }
                TestModule.prototype.make = function () {
                    console.log(this.value);
                };
                return TestModule;
            }());
            exports_1("TestModule", TestModule);
        }
    };
});
System.register("main", ["module"], function (exports_2, context_2) {
    "use strict";
    var module_1, module;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (module_1_1) {
                module_1 = module_1_1;
            }
        ],
        execute: function () {
            console.log("start");
            module = new module_1.TestModule();
            module.make();
        }
    };
});
