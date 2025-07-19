// basic interface
interface IPerson {
  name: string;
  age: number;
  email?: string;
  readonly id: string;
}

const personData: IPerson = {
  id: "1234",
  name: "john",
  age: 23,
};

// interface extension
interface IAnimal {
  name: string;
  age: number;
}

interface IDog extends IAnimal {
  breed: string;
  barks?(): void;
}

interface ICat extends IAnimal {
  isIndoor: boolean;
  meows(): void;
}

const myPet: IDog | ICat = {
  name: "ekuke",
  age: 3,
  breed: "nkika",
  isIndoor: true,
  barks: () => {
    console.log("whoo whooo whooo");
  },
  meows: () => {
    console.log("meowwwww!");
  },
};

interface IPet {
  owner: string;
  vaccinated: boolean;
}

interface IDomesticDog extends IPet, IDog {
  registered: boolean;
}

const petDog: IDomesticDog = {
  name: "thomas",
  age: 4,
  breed: "ekuke",
  owner: "frank vj",
  registered: true,
  vaccinated: true,
  barks() {
    console.log("whooo whooo whooo!");
  },
};

// function interface
interface SearchFunction {
  (source: string, substring: string): boolean;
}

const search: SearchFunction = (src, sub) => {
  return src.includes(sub);
};

// interface with call signature and properties
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

const counter: Counter = ((start: number) => {
  return `count ${start}`;
}) as Counter;

counter.interval = 1000;
counter.reset = () => {
  console.log("Counter reset");
};

// index signature
interface stringDiction {
  [key: string]: number;
  length: number;
}

const dic: stringDiction = {
  length: 23,
  age: 28,
};

interface Drivable {
  speed: number;
  drive(): void;
  stop(): void;
}

interface Flyable {
  altitude: number;
  fly(): void;
  land(): void;
}

class Car implements Drivable {
  speed: number = 0;

  drive(): void {
    this.speed = 100;
    console.log(`Driving at ${this.speed}`);
  }

  stop(): void {
    console.log("Car stopped");
  }
}

class Ubelu implements Flyable {
  altitude: number = 0;

  fly(): void {
    this.altitude = 25000;
    console.log(`Ubelu flying at ${this.altitude}`);
  }

  land(): void {
    console.log(`Ubelu landed`);
  }
}

// declaration merging
interface Ex {
  title: string;
}

interface Ex {
  name: string;
}

declare var some: Ex;
some.name;
some.title;
