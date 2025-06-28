process.on("message", (mssg) => {
  console.log("child received:", mssg);
  process.send("hi parent, i got your message");
});
