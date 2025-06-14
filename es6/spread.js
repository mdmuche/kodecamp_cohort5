const name = "john";
// console.log(...name);

for (const char of name) {
  //   console.log(char);
}

// spread unpacks the container

// rest packs the container

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const mergedNums = [0, ...nums1, 10, 11, ...nums2, 2000];
// console.log(mergedNums);

function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

// const result = sum.apply(null, nums);

const result = sum(...nums);
// console.log(result);

const [fn, ...others] = nums;
// console.log(others);

const users = {
  name: "john doe",
  age: 24,
  african: true,
  nationality: "ghanian",
  height: 6,
};

const { name: prop1, ...otheroProps } = users;
console.log(otheroProps);
// console.log(prop1);
