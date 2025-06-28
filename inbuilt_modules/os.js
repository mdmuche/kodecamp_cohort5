const os = require("node:os");

console.log((os.freemem() / (1024 * 1024)).toFixed());
console.log((os.uptime() / 60).toFixed(2));
console.log(os.cpus().length);
