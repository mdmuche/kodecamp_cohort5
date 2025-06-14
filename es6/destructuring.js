const names = ["john", "doe", "joe"];
// const f = names[1]
// const t = names[2]

const [f, _, t] = names;
// console.log(f, t);

const [r, s, v, fo = "james"] = names;
// console.log(r, s, v, fo);

let x = 4;
y = 6;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// object destructuring
const data = {
  name: "john",
  age: 27,
  address: {
    country: "portugal",
    city: "porto",
  },
  race: "black",
};

const {
  name,
  address: { city, country },
  surname = "pablo",
} = data;
console.log(
  `my name is ${name} and i'm from ${country} my lastname is ${surname}`
);
