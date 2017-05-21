
var express = require('express');

var app = express();

app.use(express.static('public'));
app.use('/js', express.static('public/js'));

app.get('/', async (req, res) => 
  res.render('index') 
);

app.listen(3000, () =>  console.log('Example app listening on port 3000!'));