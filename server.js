var express = require('express');
const http = require('http');
const https = require('https');
const qs = require('querystring');
var path = require('path');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser');

app = express();
app.use('/', serveStatic(path.join(__dirname, '/dist')))

app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
