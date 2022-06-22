"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = (function () {
    function Person(a, n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
        this.age = a;
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log("".concat(phrase, " ").concat(this.name, ", I am ").concat(this.age, " years old."));
        }
        else {
            console.log("".concat(phrase, " I am ").concat(this.age, " years old."));
        }
    };
    return Person;
}());
var user1;
user1 = new Person(40);
user1.greet("Hello, ");
//# sourceMappingURL=app.js.map