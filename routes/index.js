const express = require('express');
const router = express.Router();
const CustomMiddleware = require('../middleware/async');

/* GET home page. */
router.get('/', CustomMiddleware((_, res) => {
  res.render('index', { title: 'Express' });
}));

module.exports = router;
