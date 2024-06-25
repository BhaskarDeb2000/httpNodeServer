const passwordMatch = (password, confirmPassword) => {
  if (password === confirmPassword) {
    console.log("Password Matched");
  } else {
    console.log("Password does not match");
  }
};

module.exports = passwordMatch;
