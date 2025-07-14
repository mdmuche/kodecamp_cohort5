"use strict";
// primitive types
// number
let price = 19.67;
let hex = 0x77;
let binary = 0b1010;
// string
let pName = "john";
let fullName = pName;
// boolean
let isActive = true;
let completed = false;
// null and undefined
let date = null;
let value = undefined;
// reference type
// Array method 1
let numbers = [1, 2, 3, 4, 5];
let names = ["john", "kent", "josh"];
// Array method 2
let numbers2 = [1, 2, 3, 4, 5];
let names2 = ["john", "kent", "josh"];
let mixed = ["john", "kent", "josh", 1, 2, 3];
let mixed2 = ["john", "kent", "josh", 1, 2, 3];
let person = {
    name: "john",
    age: 23,
    isEmployed: true,
};
let person2 = {
    name: "john",
    age: 23,
};
// special types
// any
let anything = "john";
anything = 45;
anything = true;
// unknown
let userInput;
userInput = "john";
userInput = 45;
if (typeof userInput === "string") {
    console.log(userInput.toUpperCase());
}
if (typeof userInput === "number") {
    console.log(userInput + 23);
}
