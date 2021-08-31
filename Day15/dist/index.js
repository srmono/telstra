"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Basic Types
//@ts-ignore
var id = 9;
var company = "Telstra";
var isPublished = true;
var x = "Hello";
//console.log("ID:", id)
var empIds = [1, 2, 3, 4, 5, 6];
var arr = [1, true, "hello"];
//Tuple
var person = [1, "venkat", true];
//Tuple Array
var employee;
employee = [
    [1, "venkat"],
    [2, "neha"],
    [3, "anubha"]
];
// Union
var eid = "99";
/// ENUM allow developer to define a set of names constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//console.log(Direction.Up)
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
var user = {
    id: 1,
    name: "venkat"
};
// Type Assertions
var cid = 1;
//let customerId = <number>cid
var customerId = cid;
customerId = 1;
// Functions 
function addCalc(x, y) {
    return x + y;
}
//console.log(addCalc(1, 3))
// void
function log(message) {
    console.log(message);
}
var userOne = {
    id: 1,
    name: "venkat"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, role) {
        var _this = _super.call(this, id, name) || this;
        _this.role = role;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Abhijit", "Developer");
//console.log(emp.)
// function Person(){
// }
// Person.prototype.register = function(){}
var venkat = new Person(1, "Venkat");
var neha = new Person(2, "Neha");
//neha.id = 3;
console.log(venkat.register());
console.log(venkat, neha);
// Generics 
// function getArray(items: any[]): any[] {
//     return new Array().concat(items);
// }
function getArray(items) {
    return new Array().concat(items);
}
var numArr = getArray([1, 2, 3, 4]);
var strArr = getArray(["venkat", "neha", "abhijit"]);
//numArr.push("")
