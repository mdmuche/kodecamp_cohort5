function fetchUserData(userId, callback) {
  setTimeout(() => {
    if (userId === "invalid") {
      callback(new Error("invalid user id"), null);
      return;
    }

    const userData = {
      userId,
      name: "john doe",
      email: "johndoe@gmail.com",
    };

    callback(null, userData);
  }, 1000);
}

const result = fetchUserData("invalid", (error, data) => {
  if (error) {
    console.error("eror fetching data", error.message);
    return;
  }

  console.log("user data", data);
});
