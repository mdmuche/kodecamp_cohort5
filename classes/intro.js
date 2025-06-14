class Person {
  #name = "john";
  #age = 29;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  #getDetails() {
    return `${this.#name} is ${this.#age}`;
  }

  getPublicDetails() {
    return `${this.#name} is ${this.#age}`;
  }
}

const P1 = new Person("john", 29);
// console.log(P1.getPublicDetails());

class _Math {
  static abs(a) {
    if (!a) {
      throw new Error("Empty value method");
    }

    if (typeof a !== "number") {
      throw new Error("type must be a number");
    }

    if (a < 1) {
      return -1 * a;
    } else {
      return a;
    }
  }
}

// console.log(_Math.abs(-20));

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} speaks`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} that is ${this.breed} barks whoo whoo`;
  }
}

const ekuke = new Dog("ekuke", "ekuke breed");
// console.log(ekuke.speak());

// composition
class Engine {
  start() {
    console.log("engine starts");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  start() {
    this.engine.start();
    console.log("car started");
  }
}

const myCar = new Car();
// myCar.start();

// dependency injection
class Database {
  save(data) {
    console.log(`saving ${data} to database`);
  }
}

class userService {
  constructor(database) {
    this.database = database;
  }

  createUser(name) {
    this.database.save(name);
  }
}

const db = new Database();
const user = new userService(db);
user.createUser("john");
