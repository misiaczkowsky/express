const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Hello World!')
});

const square = require('./square');
console.log('The area of a square with a width of 4 is ' + square.area(4));



app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

console.log('First');
console.log('Second');

setTimeout(function() {
    console.log('First');
    }, 3000);
 console.log('Second');

 const wiki = require('./wiki.js');

app.use('/wiki', wiki);
