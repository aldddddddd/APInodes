var express = require('express');
var app = express();
var fs = require("fs");

var song = {
   "movie5" : {
      "Title" : "Adam Projects",
      "Directed by" : "Shawn Levy",
      "Genre":"Action, Adventure, Comedy",
      "Link":"https://www.imdb.com/title/tt2463208/?ref_=ext_shr_lnk",
      "id": 5
}
}

app.get('/listMovies', function (req, res) {
   fs.readFile(__dirname + "/" + "title.json", 'utf8', function (err, data) {
      console.log(data);
      res.end(data);
   });
})

app.post('/addMovies', function (req, res) {
    // First read existing songs.
    fs.readFile(__dirname + "/" + "title.json", 'utf8', function (err, data) {
       data = JSON.parse(data);
       data["movie6"] = song["movie6"];
       console.log(data);
       res.end(JSON.stringify(data));
    });
})

app.get('/:id', function (req, res) {
    // First read existing songs.
    fs.readFile(__dirname + "/" + "title.json", 'utf8', function (err, data) {
       var songs = JSON.parse(data);
       var song = songs["title" + req.params.id];
       console.log(song);
       res.end(JSON.stringify(title));
    });
})

app.delete('/deleteMovies', function (req, res) {
   // First read existing songs.
   fs.readFile(__dirname + "/" + "title.json", 'utf8', function (err, data) {
      data = JSON.parse(data);
      delete data["movie2"];
      console.log(data);
      res.end(JSON.stringify(data));
   });
})

app.delete('/deleteMovies/:id', function (req, res) {
    // First read existing songs.
    fs.readFile(__dirname + "/" + "title.json", 'utf8', function (err, data) {
       data = JSON.parse(data);
       delete data["title" + req.params.id];
       console.log(data);
       res.end(JSON.stringify(data));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Song app listening at http://%s:%s", host, port);
})
