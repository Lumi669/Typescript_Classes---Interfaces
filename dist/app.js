"use strict";
var Person = (function () {
    function Person(n, a) {
        this.age = 30;
        this.name = n;
        this.age = a;
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name, ", I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var user1;
user1 = new Person("Rose", 20);
user1.greet("Hello, ");
//# sourceMappingURL=app.js.map