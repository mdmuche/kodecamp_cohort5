const fs = require("fs/promises");

function validateUser(user, cb) {
  setTimeout(() => cb(null, user), 100);
}

async function validateDatasync(userData) {
  return new Promise((resolve, reject) => {
    validateUser(userData, (err, isValid) => {
      if (err) return reject(err);
      resolve(isValid);
    });
  });
}

async function processValidateFunc() {
  try {
    const isValid = await validateDatasync({
      name: "john doe",
      isValid: true,
    });
    if (!isValid) {
      throw new Error("invalid user");
    }

    console.log(isValid);
  } catch (err) {
    console.error(err);
  }
}

processValidateFunc();
