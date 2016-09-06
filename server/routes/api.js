const express = require('express');
const router = express.Router();

router.use('/payments', require('./payments'));

module.exports = router;
