const express = require("express");
const router = express.Router();
const {
  registerUser,
  getme,
  loginUser,
} = require("./../controllers/userController");
const { protect } = require("../middleware/authMiddeleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getme);

module.exports = router;
