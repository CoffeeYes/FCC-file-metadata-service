// server.js
// where your node app starts

// init project
var express = require('express');
var multer = require("multer");
var app = express();

var storage = multer.diskStorage({
	destination: function(req, file, callback) {
		callback(null, './assets')
	}
})
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/",function(req,res) {
  var upload = multer({}).single("userFile");
  upload(req,res,function(error) {
    res.send("fileSize : " + JSON.stringify(req.file.size))})
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
