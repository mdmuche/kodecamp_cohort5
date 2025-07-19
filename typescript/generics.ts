function identity<T>(arg: T): T {
  return arg;
}

const numRes = identity<number>(100);
const strRes = identity<string>("100");
const arrRes = identity<Array<string | number | boolean>>(["john", 23, false]);

function pair<T, U>(firstArg: T, secondArg: U): [T, U] {
  return [firstArg, secondArg];
}

const strNumRes = pair<string, number>("john", 23);
const numBooleanRes = pair<number, boolean>(45, false);
const strBooleanRes = pair("true", true);

// Generic array operation
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length ? arr[0] : undefined;
}

const nums: number[] = [1, 2, 3, 4, 5];
const firstNum = getFirstElement(nums);
