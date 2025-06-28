const { fork } = require("child_process");

const child = fork("./child.js");
child.send("hello from parent");
child.on("message", (mssg) => {
  console.log("parent received:", mssg);
});
