const express = require('express');

const router = express.Router();

const Expense = require('../models/expense_table');

const ExpenseController = require('../controller/expense');


router.post('/PostExpense', ExpenseController.PostExpense);

router.get('/getExpense', ExpenseController.GetExpense);

router.delete('/deleteExpense/:id', ExpenseController.DeleteExpense);

module.exports = router;



