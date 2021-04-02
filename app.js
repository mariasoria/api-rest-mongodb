const express = require('express');

const index = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/', index);

module.exports = app;
