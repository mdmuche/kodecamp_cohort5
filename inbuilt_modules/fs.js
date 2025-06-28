const fs = require("fs");

const fileName = "file.txt";

// fs.writeFile(fileName, "hello john", (err) => {
//   if (err) throw err;
//   console.log("file created");

//   fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     }

//     console.log("data is:", data);
//   });
// });

const readStream = fs.createReadStream(fileName, "utf-8");
readStream.on("data", (chunk) => {
  console.log(chunk);
});
