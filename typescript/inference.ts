// basic types inference
let fName = "james";
// let age = 45;
let isAdmin = true;
let items = [1, 2, 3, "john", false];

let emp = ["john"];

// function return type inference
function add(a: number, b: number) {
  return a + b;
}

function fullName(fName: string, lName: string) {
  return `${fName} ${lName}`;
}

// complex inference with conditions
function processValue(number: number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return 0;
  }
}

// function processUser(user: Record<string, string | number | boolean>) {
//   return "name" in user ? user.name : "john";
// }

function processUser(user: { name: string }) {
  return user.name;
}

// contextual type inference
let num = [1, 2, 3, 4, 5, "john", true];
num.forEach((num) => {
  if (typeof num === "number") {
    return num.toFixed();
  } else if (typeof num === "string") {
    return "hello " + num;
  } else if (typeof num === "boolean") {
    return `${num} is now ${false}`;
  }
});
