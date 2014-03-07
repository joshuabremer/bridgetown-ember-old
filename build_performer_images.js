var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");



getPerformerJSON('http://bridgetown.festivalthing.com/export/performers/json');








function getPerformerJSON(url, callback) {
  //var file = fs.createWriteStream("assets/performers.json");
  fs.writeFileSync("scripts/fixtures_performer.js","/*jshint -W100 */\nApp.Performer.FIXTURES = ",'utf8');
  fs.writeFileSync("assets/raw_performers.json",'','utf8');
  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("scripts/fixtures_performer.js",chunk);
      fs.appendFileSync("assets/raw_performers.json",chunk);
    });
    response.on('end', function (data) {
      fs.appendFileSync("scripts/fixtures_performer.js",";");
      replacePerformerIdWithId("scripts/fixtures_performer.js");
      replaceApostrophes("scripts/fixtures_performer.js");
      
      console.log("Created: " + "scripts/fixtures_performer.js");
      buildImages("assets/raw_performers.json");
    });
  });
}

function replacePerformerIdWithId(filepath, callback) {
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/PerformerId/g, "id");
    fs.writeFile(filepath, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}

function replaceApostrophes(filepath, callback) {
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var result = data;
    result = result.replace(/\\u2018/g, "'");
    result = result.replace(/\\u2019/g, "'");
    result = result.replace(/\\u201c/g, "\"");
    result = result.replace(/\\u2033/g, "\"");
    result = result.replace(/\\u201d/g, "\"");
    result = result.replace(/\\u00a0/g, " ");
    result = result.replace(/\\u2026/g, "...");
    result = result.replace(/\\u2013/g, "-");
    result = result.replace(/\\u2014/g, "-");

    fs.writeFile(filepath, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}


function buildImages(path) {
  fs.mkdir('tmp', function() {});
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



