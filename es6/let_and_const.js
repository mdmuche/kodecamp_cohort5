const m = 4;
// console.log("m", m);

if (m > 2) {
  let n = 2;
  //   console.log("n", n);
}

const obj1 = {
  name: "john",
  happy: true,
  height: "tall",
  career: "software engineer",
  age: 32,
};
// const obj2 = { ...obj1, name: "joe" };

// how its been handled behind the hood
const obj2 = Object.assign(obj1, { name: "joe" });
// console.log(obj2);

// with arrays
const arr = [1, 2, 3];
const sArr = [...arr, 4, 5];
console.log(sArr);
