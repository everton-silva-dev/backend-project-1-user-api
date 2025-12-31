function validateTransaction(req, res, next) {
  const { type, value } = req.body;

  if (!type || !value) {
    return res.status(400).json({
      error: "Fields 'type' and 'value' are required"
    });
  }

  if (type !== "income" && type !== "expense") {
    return res.status(400).json({
      error: "Type must be 'income' or 'expense'"
    });
  }

  if (typeof value !== "number" || value <= 0) {
    return res.status(400).json({
      error: "Value must be a positive number"
    });
  }

  next();
}

module.exports = validateTransaction;
