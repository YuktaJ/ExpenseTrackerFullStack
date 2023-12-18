const express = require('express');

const app = express();

const cors = require('cors');

const expense_route = require('./routes/expense');

const sequelize = require('./connections/database');
const Expense = require('./models/expense_table');

app.use(express.urlencoded({ extended: false })); //body-parsing


app.use(cors()); //connectivity
app.use(express.json()); // json files exporting
app.use(expense_route);

sequelize.sync();

app.listen(3000);




