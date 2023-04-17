const express = require('express');
const router = express.Router();

/* GET stupid listing. */
router.get('/stupid', function(req, res, next) {
  res.send('respond with a stupid resource ');
});

module.exports = router;
