var express = require('express');
var router = express.Router();
var data = require('../data_source/MovieData.json');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	console.log('request id = ',req.params.id);
  res.send(data);
});

module.exports = router;
