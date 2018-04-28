var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', contents: '테스트 첫번째 화면'});
});

router.get('/list', function(req, res, next) {
  res.render('list', {
    lists: [
      '1',
      '2',
      '3',
      '4'
    ]
  });
});

router.get('/hello', function(req, res, next) {
  res.render('hello', { title: '안녕', contents: '테스트 두번쨰 화면'});
});

module.exports = router;
