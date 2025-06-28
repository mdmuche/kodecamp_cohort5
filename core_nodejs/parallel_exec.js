function fetchUserProfile(id, cb) {
  setTimeout(() => cb(null, { name: "john doe", age: 29 }), 200);
}

function fetchUserPosts(id, cb) {
  setTimeout(
    () =>
      cb(null, [
        { tiitle: "title 1", body: "lorem ipsum 1" },
        { tiitle: "title 2", body: "lorem ipsum 2" },
        { tiitle: "title 3", body: "lorem ipsum 3" },
      ]),
    150
  );
}

function fetchUserFriends(id, cb) {
  setTimeout(
    () =>
      cb(null, [
        { userName: "dogFace" },
        { userName: "catFace" },
        { userName: "pigFace" },
        { userName: "monkeyFace" },
        { userName: "lionFace" },
      ]),
    300
  );
}

function fetchAllUserData(userId, cb) {
  let completed = 0;
  let hasError = 0;
  const result = {};

  const operations = [
    { name: "profile", fn: fetchUserProfile },
    { name: "posts", fn: fetchUserPosts },
    { name: "friends", fn: fetchUserFriends },
  ];

  operations.forEach((operation) => {
    operation.fn(userId, (err, data) => {
      if (hasError) return;
      if (err) {
        hasError = true;
        return cb(err);
      }

      result[operation.name] = data;
      completed++;

      if (completed === operations.length) {
        cb(null, result);
      }
    });
  });
}

fetchAllUserData("user90", (err, data) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(data);
});
