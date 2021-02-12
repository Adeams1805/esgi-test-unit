var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var items = [];

/* GET items listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  res.json(items);
  res.end();
});

/* POST items */
router.post('/', function(req, res, next) {
  items.push({
    id: items.length+1,
    username: req.body.username
  })
  res.send('posted');
  res.end();
});

module.exports = router;
