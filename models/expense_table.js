const sequelize = require('../connections/database');
const Sequelize = require('sequelize');

const Expenses = sequelize.define("Expense", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    options: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Expenses;