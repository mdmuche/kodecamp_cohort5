function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `welcome ${this.name}`;
};
Person.prototype.getAge = function () {
  return `you are ${this.age}years old`;
};

const martins = new Person("martins", 28);
// console.log(martins.greet());
// console.log(martins.getAge());

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return this.name + " who! who! who!!!";
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  return this.name + " who! who! whoo!!";
};

const ekuke = new Dog("stan", "ekuke");
// console.log("bark", ekuke.bark());
// console.log("speak", ekuke.speak());

// inheritance with es6 classes
class Shape {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `this is a ${this.name}`;
  }
}

class Rectangle extends Shape {
  constructor(width, height, name) {
    super();
    this.width = width;
    this.height = height;
    this.name = name;
  }

  area() {
    return this.width * this.height;
  }

  getName() {
    return this.name;
  }
}

const nR = new Rectangle(30, 40, "stan");
console.log(nR.getName());
console.log(nR.area());
console.log(nR.describe());
