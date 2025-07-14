// basic types inference
var fName = "james";
var age = 45;
var isAdmin = true;
var items = [1, 2, 3, "john", false];
// function return type inference
function add(a, b) {
    return a + b;
}
function fullName(fName, lName) {
    return "".concat(fName, " ").concat(lName);
}
console.log(fullName("john", "doe"));
