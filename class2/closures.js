function outerFunction(m) {
  // lexical scope starting
  function innerFunction(n) {
    console.log(m + n);
  }
  // lexical scope ending
  return innerFunction;
}

// const addTwo = outerFunction(2);
// addTwo(3);

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c1 = createCounter();
const c2 = createCounter();

// console.log(c1());
// console.log(c2());
// console.log(c1());

function bankAccount(innitialBalance) {
  let balance = innitialBalance;

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },

    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }

      return "insufficient funds";
    },

    checkBalance: function () {
      return balance;
    },
  };
}

const zenithAccount = bankAccount(5000);
// console.log(zenithAccount.deposit(1500)); // 6500
// console.log(zenithAccount.withdraw(3000)); // 3500
// console.log(zenithAccount.checkBalance()); // 3500

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    // console.log((i + 1) * 9);
  }, 100);
}

// using iife to solve the problem of var since its hoisted in the global scope
for (var i = 0; i < 4; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 100);
  })(i);
}
