let transactions = [
  { id: 1, type: "income", value: 500 },
  { id: 2, type: "expense", value: 200 }
];

function listTransactions() {
  return transactions;
}

function createTransaction(type, value) {
  const newTransaction = {
    id: transactions.length + 1,
    type,
    value
  };

  transactions.push(newTransaction);
  return newTransaction;
}

module.exports = {
  listTransactions,
  createTransaction
};
