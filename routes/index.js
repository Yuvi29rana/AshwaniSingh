var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/AboutMe', function(req, res, next) {
  res.render('AboutMe', { title: 'AboutMe' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/service', function(req, res, next) {
  res.render('service', { title: 'service' });
});

router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project' });
});

module.exports = router;
