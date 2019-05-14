var express = require('express');
var router = express.Router();


router.get('/migrant', function(req, res, next) {
  res.render('forms/migrant');
});

router.post('/migrant', function(req, res, next) {
  console.log(req.body);
  
  res.send(req.body);
});

router.get('/f2', function(req, res, next) {
  res.render('forms/f2');
});

router.get('/f3', function(req, res, next) {
  res.render('forms/f3');
});

module.exports = router;
