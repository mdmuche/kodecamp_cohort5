function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(10));
// 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1;

const names = new Map();

const objKey = "john";
names.set(objKey, {
  name: "john",
  email: "johndoe@gmail.com",
});
names.set("kent", { name: "kent", email: "kent@gmail.com" });

if (names.has(objKey)) {
  console.log(names.get(objKey));
}

// console.log(names);
