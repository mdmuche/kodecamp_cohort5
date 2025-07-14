var _a;
// variable annotations
var count = 0;
// function annotation
function greet(name, age) {
    return "my name is ".concat(name, " i am ").concat(age, "yrs old");
}
function add(a, b) {
    return a + b;
}
var multiply = function (x, y) { return x * y; };
function createUser(name, age, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    console.log(name);
}
var calculator = {
    add: function (a, b) { return a + b; },
    sub: function (a, b) { return a - b; },
    multiply: null,
    divide: function (a, b) { return a / b; },
};
var result = (_a = calculator.multiply) === null || _a === void 0 ? void 0 : _a.call(calculator, 3, 3);
// console.log("result is", result);
var students = [
    {
        name: "john",
        grade: 98,
        subjects: ["maths", "physics", "computer science"],
    },
];
