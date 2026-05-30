const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserProfile,
  setupMpin,
} = require("../Controllers/authController.js");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
router.post("/setup-mpin", protect, setupMpin);

module.exports = router;
