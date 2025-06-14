const basicPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("operation successful");
    } else {
      reject("operation failed");
    }
  }, 1000);
})
  .then((res) => {
    console.log(res);
    return res.toUpperCase();
  })
  .then((uRes) => {
    console.log(uRes);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise completed");
  });
