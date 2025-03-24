var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var john = new Person('John', 40);
var mary = new Person('Mary', 35);
john.tellMyName(); // I am John
john.tellMyAge(); // I am 40 years old
mary.tellMyName(); // I am Mary
mary.tellMyAge(); // I am 35 years old
