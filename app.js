const express = require('express');

const index = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/', index);

module.exports = app;
