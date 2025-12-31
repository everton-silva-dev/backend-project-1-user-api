const express = require("express");
const router = express.Router();

const {
  listTransactions,
  createTransaction
} = require("../services/transactions.service");

const validateTransaction = require("../middlewares/validateTransaction");

router.get("/transactions", (req, res) => {
  return res.json(listTransactions());
});

router.post("/transactions", validateTransaction, (req, res) => {
  const { type, value } = req.body;

  const transaction = createTransaction(type, value);

  return res.status(201).json(transaction);
});

module.exports = router;
