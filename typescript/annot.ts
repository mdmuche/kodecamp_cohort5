// variable annotations
let count: number = 0;

// function annotation
function greet(name: string, age: number): string {
  return `my name is ${name} i am ${age}yrs old`;
}

// function add(a: number, b: number): number {
//   return a + b;
// }

const multiply = (x: number, y: number): number => x * y;

function createUser(name: string, age: number, isAdmin: boolean = false): void {
  console.log(name);
}

// obj annotation
let calculator = {
  add: (a: number, b: number): number => a + b,
  sub: (a: number, b: number): number => a - b,
  multiply: null as ((a: number, b: number) => number) | null,
  divide: (a: number, b: number): number => a / b,
};

const result = calculator.multiply?.(3, 3);
// console.log("result is", result);

//  array and obj annotation
type Student = Array<{
  name: string;
  grade: number;
  subjects: Array<string>;
}>;

let students: Student = [
  {
    name: "john",
    grade: 98,
    subjects: ["maths", "physics", "computer science"],
  },
];
