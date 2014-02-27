var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");



getPerformerJSON('http://bridgetown.festivalthing.com/export/performers/json');








function getPerformerJSON(url, callback) {
  var file = fs.createWriteStream("assets/performers.json");
  var request = http.get(url, function(response) {
    response.pipe(file);
    response.on('end', function () {
      buildImages("assets/performers.json");
      console.log("Created: " + "assets/performers.json");
    });
  });
}

function buildImages(path) {
  fs.mkdir('tmp');
  fs.readFile(path, 'utf8', function(err,data) {
      var performers = eval(data);
      performers.forEach(function(performer) {
        buildImageFromURL(performer.Name,performer.PhotoUrl);
      });
  });
}

function buildImageFromURL(name,url) {
  var filename = url.replace(/^.*[\\\/]/, '');
  var file = fs.createWriteStream("tmp/" + filename);
  var request = http.get(url, function(response) {
    console.log("Created: " + "tmp/" + filename);
    response.pipe(file);
    response.on('end', function () {
      buildThumbnail("tmp/" + filename, "assets/performer-" + cleanStr(name) + "-300x300.jpg");
    });
  });
}

function buildThumbnail(imgSrc, imgDest) {
    easyimg.thumbnail(
      {
         src: imgSrc,
         dst: imgDest,
         width:300, height:300,
         x:0, y:0
         },
      function(err, image) {
         if (err) throw err;
         console.log("Resized and cropped: " + image.width + " x " + image.height);
         fs.unlink(imgSrc, function() {
          console.log("Deleted tmp file: " + imgSrc);
         });
         
      }
    );
}

function cleanStr(string) {
  return string.replace(/\W/g, '').toLowerCase();
}



