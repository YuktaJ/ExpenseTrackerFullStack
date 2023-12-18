const Expense = require('../models/expense_table');

exports.PostExpense = (req, res, next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const options = req.body.options;
    console.log(amount)
    Expense.create({
        amount: amount,
        description: description,
        options: options
    }).then((result) => {
        res.status(201).json({
            expense: result
        })
    }).catch((err) => {
        console.log(err);
    })
}

exports.GetExpense = (req, res, next) => {
    Expense.findAll().then((result) => {
        res.status(201).json({
            all_users: result
        })
    }).catch((err) => {
        console.log(err);
    })
}

exports.DeleteExpense = (req, res, next) => {
    const id = req.params.id

    console.log(id)
    Expense.destroy({
        where: {
            id: id
        }
    });
}