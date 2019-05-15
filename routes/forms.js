var express = require('express');
var router = express.Router();


router.get('/eTools', function(req, res, next) {
  res.render('forms/eTools');
});

router.post('/eTools', function(req, res, next) {
  console.log(req.body);
  
  res.send(req.body);
});




router.get('/migrant', function(req, res, next) {
  res.render('forms/migrant');
});

router.post('/migrant', function(req, res, next) {
  console.log(req.body);
  
  res.send(req.body);
});




router.get('/stakeholder', function(req, res, next) {
  res.render('forms/stakeholder');
});

router.post('/stakeholder', function(req, res, next) {
  console.log(req.body);
  
  res.send(req.body);
});




router.get('/studies', function(req, res, next) {
  res.render('forms/studies');
});

router.post('/studies', function(req, res, next) {
  console.log(req.body);
  
  res.send(req.body);
});



module.exports = router;
