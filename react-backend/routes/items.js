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
  const it = {
    id: items.length+1,
    name: req.body.name,
    content: req.body.content,
    createdAt: req.body.createdAt
  };
  items.push(it);
  res.send(it);
  res.end();
});

module.exports = router;
