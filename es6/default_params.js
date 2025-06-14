// old way of writing parameters
function oldWay(name, age) {
  name = name || "anonymous";
  age = age || 27;
}

function newWay(name = "anonymous") {
  console.log(name);
}

// newWay("john");

function greetOld(name, greeting) {
  name = name || "Guest";
  greeting = greeting || "Hello";

  return greeting + " " + name + "!";
}

const greetNew = (name = "Guest", greeting = "hello") =>
  `${greeting}, ${name}!`;

// console.log(greetOld("", "Hi"));
// console.log(greetNew(undefined, "Hi"));
