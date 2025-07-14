// union types
let id: string | number;
id = "abcdhhs";
id = 8229292;

function printId(id: string | number | undefined = undefined) {
  console.log(`ID:${id ?? "No id"}`);
}

printId("abcd");
printId(1234);
printId();

// Array union types
type Cat = { name: string; meows: boolean };
type Dog = { name: string; barks: boolean };

let pets: Array<Cat | Dog> = [
  { name: "whiskers", meows: true },
  { name: "ekuke", barks: true },
  { name: "nkita", barks: true },
];
