//@des    Register new user
//@route  POST /api/users
//@access Public
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

//@des    Authenticate a user
//@route  POST /api/users/login
//@access Public
const loginUser = (req, res) => {
  res.json({ message: "login User" });
};

//@des    Get user fata
//@route  GET /api/users/me
//@access Public
const getme = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getme,
};
