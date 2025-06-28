const { exec } = require("child_process");

exec("dir", (err, stdout) => {
  if (err) return console.log(err);
  console.log(stdout);
});
