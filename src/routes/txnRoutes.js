const express = require("express");
const router = express.Router();
const {
  sendMoney,
  getTransactionHistory,
} = require("../controllers/transactionController.js");
const { protect } = require("../middlewares/authMiddleware.js");

router.post("/send", protect, sendMoney);
router.get("/history", protect, getTransactionHistory);

module.exports = router;
