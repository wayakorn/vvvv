var express = require('express');
var router = express.Router();

var way = require('./way');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('<br>- <a href="users/way">way</a><br>');
});
router.get('/way', way);

module.exports = router;
