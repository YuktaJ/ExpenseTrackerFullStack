const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("Expense-Tracker", "root", "Laxmip@2013", {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;