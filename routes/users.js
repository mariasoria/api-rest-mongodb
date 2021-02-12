const express = require('express');
const router = express.Router();

// USERS
router.get('/', function(req, res, next) {
  res.send('Hello from Users js');
  next();
});

module.exports = router;
