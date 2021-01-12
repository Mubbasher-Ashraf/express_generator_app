const express = require('express');
const router = express.Router();
const CustomMiddleware = require('../middleware/async');

/* GET users listing. */
router.get('/', CustomMiddleware((_, res) => {
  res.send('respond with a resource');
}));

module.exports = router;
