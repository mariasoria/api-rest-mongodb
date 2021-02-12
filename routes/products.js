const express = require('express');
const router = express.Router();

router.get('/',  function (req, res, next) {
    res.send('Hello from Products js');
    next();
});

router.get('/inside',  function (req, res, next) {
    res.send('Hello from Products js - inside Products');
    next();
});

module.exports = router;
