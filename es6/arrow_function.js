const m = function (x) {
  return x * 2;
};

// console.log(m(4));

const n = (y) => y * 2;
// console.log(n(5));

const p = () => "arrow function";
// console.log(p());

//? the this keyword inherits the arguments from its lexical scope for arrow function
// function expression
function args(a, b) {
  console.log(arguments);
}

// args(3, 4);

// arrow function
const args1 = (a, b) => {
  console.log(arguments);
};

// args1(3, 4);

class Timer {
  constructor() {
    this.seconds = 0;
  }

  startTraditional() {
    setInterval(
      function () {
        this.seconds++;
        if (this.seconds > 20) {
          return;
        }
        console.log(this.seconds);
      }.bind(this),
      1000
    );
  }
  // startArr() {
  // setInterval(() => {
  //   this.seconds++;
  //   if (this.seconds > 20) {
  //     return;
  //   }
  //   console.log(this.seconds);
  // }, 1000);
  // }
}

const nT = new Timer();
// nT.startArr();
// nT.startTraditional();
