var express = require('express');
var router = express.Router();

var way = function (req, res) {
  res.render('index', { title: 'Way' });	
}

module.exports = way;
