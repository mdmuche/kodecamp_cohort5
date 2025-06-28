function fetchUser(id, cb) {
  validateUser(id, cb);
  setTimeout(() => cb(null, { id, name: "john doe", status: "pending" }), 100);
}

function validateUser(user, cb) {
  console.log("this is user", user);
  updateUserStatus(user.id, "active", (err, result) => {
    if (err) return cb(err);
    console.log("user status updated");
    cb(null, { user, status: "completed" });
  });
  setTimeout(() => cb(null, true), 100);
}

function updateUserStatus(id, status, cb) {
  setTimeout(() => cb(null, { id, status }), 100);
}

function processUserWorkflow(userId, cb) {
  console.log("starting user work flow...");
  fetchUser(userId, cb);
}

processUserWorkflow("user90", (err, data) => {
  if (err) {
    console.log("error: ", err.message);
    return;
  }
  console.log(data);
});
