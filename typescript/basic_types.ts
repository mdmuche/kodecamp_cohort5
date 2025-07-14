// primitive types
// number
let price: number = 19.67;
let hex: number = 0x77;
let binary: number = 0b1010;

// string
let pName: string = "john";
// let fullName: string = pName;

// boolean
let isActive: boolean = true;
let completed: boolean = false;

// null and undefined
let date: null = null;
let value: undefined = undefined;

// reference type
// Array method 1
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["john", "kent", "josh"];

// Array method 2
let numbers2: Array<number> = [1, 2, 3, 4, 5];
let names2: Array<string> = ["john", "kent", "josh"];

let mixed: (string | number)[] = ["john", "kent", "josh", 1, 2, 3];
let mixed2: Array<string | number> = ["john", "kent", "josh", 1, 2, 3];

// type inference
type Person = { name: string; age: number; isEmployed?: boolean };
let person: Person = {
  name: "john",
  age: 23,
  isEmployed: true,
};

let person2: Person = {
  name: "john",
  age: 23,
};

// special types
// any
let anything: any = "john";
anything = 45;
anything = true;

// unknown
let userInput: unknown;
userInput = "john";
userInput = 45;

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

if (typeof userInput === "number") {
  console.log(userInput + 23);
}
