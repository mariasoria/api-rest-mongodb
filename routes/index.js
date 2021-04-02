const express = require('express');
const router = express.Router();

// HOME PAGE
router.get('/', function(req, res, next) {
  res.send('Hello from Index js');
  //next();
});

module.exports = router;