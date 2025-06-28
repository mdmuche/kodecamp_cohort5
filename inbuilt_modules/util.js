const util = require("node:util");
const fs = require("node:fs");

const readFile = util.promisify(fs.readFile);

readFile("file.txt", "utf-8")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
