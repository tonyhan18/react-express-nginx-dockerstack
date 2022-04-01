var express = require('express');
var router = express.Router();
const os = require('os');

/* GET home page. */
router.get('/os', function(req,res,next) {
  res.send(`${os.hostname()}`);
});

router.get('/list', function(req, res, next) {
  res.json([
      { id: 'test1', name: '테스트1' },
      { id: 'test2', name: '테스트2' },
      { id: 'test3', name: '테스트3' },
      { id: 'test4', name: '테스트4' },
  ]);
});

router.get('/item', (req, res) => {
  res.json({
      id: 'test1',
      name: '테스트1'
  });
});


module.exports = router;
