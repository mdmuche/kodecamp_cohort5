const users = [
  { name: "john", active: false, age: 28 },
  { name: "doe", active: true, age: 35 },
  { name: "brck", active: true, age: 31 },
];

function returnName(user) {
  return user.name;
}

function returnActiveUsers(user) {
  return user.active;
}

const names = users.map(returnName);

// console.log(names);

const activeUsers = users.filter(returnActiveUsers);
// console.log(activeUsers);
// console.log(activeUsers.length);
// console.log(activeUsers.length === 0);

const sumAge = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumAge);

const usersChain = users
  .filter((user) => user.active)
  .map((user) => user.age)
  .sort()
  .reduce((sum, curr) => sum + curr, 0);
// console.log(usersChain);

// hofs

const add = (a, b) => a + b;
const square = (m) => m * m;
const subtractByOne = (p) => p - 1;

//? function composition

const compose = (k) => square(subtractByOne(add(k, 2)));
// console.log(compose(5));

const compose2 = (m) => (n) => (k) => k * n * m;

const f = compose2(5);
const g = f(3);
const h = g(2);

console.log(h);
