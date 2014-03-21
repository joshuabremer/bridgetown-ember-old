var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

getPerformerJSON('http://bridgetown.festivalthing.com/export/performers/json');

function cropSponsorImages() {
  var dir = 'assets/sponsor-images';
  var files = fs.readdirSync(dir);
  for(var i in files){
      if (!files.hasOwnProperty(i)) continue;
      var fullPath = dir+'/'+files[i];
      if (!fs.statSync(fullPath).isDirectory()){
        buildThumbnail(dir + '/' + files[i],'assets/sponsor-' + files[i]);
      }
  }
}

function getShowJSON(url, callback) {
  //var file = fs.createWriteStream("assets/performers.json");
  fs.writeFileSync("scripts/fixtures_show.js","/*jshint -W100 */\nApp.Show.FIXTURES = ",'utf8');
  fs.writeFileSync("assets/raw_shows.json",'','utf8');
  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("scripts/fixtures_show.js",chunk);
      fs.appendFileSync("assets/raw_shows.json",chunk);
    });
    response.on('end', function (data) {
      fs.appendFileSync("scripts/fixtures_show.js",";");
      replaceSubmittedIdWithId("scripts/fixtures_show.js");
      
      
      console.log("Created: " + "scripts/fixtures_show.js");
      buildImages("assets/raw_shows.json","show");
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

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
      replacePerformerIdWithId("scripts/fixtures_performer.js",function() {
        replaceApostrophes("scripts/fixtures_performer.js");
      });
      
      
      console.log("Created: " + "scripts/fixtures_performer.js");
      buildImages("assets/raw_performers.json","performer");
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

function replaceSubmittedIdWithId(filepath, callback) {
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/SubmittedId/g, "id");
    fs.writeFile(filepath, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}

function replacePerformerIdWithId(filepath, callback) {
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/PerformerId/g, "id");
    result = result.replace(/"Tier":"/g, '"Tier":');
    result = result.replace(/"}/g, '}');
    
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
    result = result.replace(/\\u2018/g, "&#x2018;");
    result = result.replace(/\\u2019/g, "&#x2019;");
    result = result.replace(/\\u201c/g, "&#x201c;");
    result = result.replace(/\\u2033/g, "&#x2033;");
    result = result.replace(/\\u201d/g, "&#x201d;");
    result = result.replace(/\\u00a0/g, " ");
    result = result.replace(/\\u2026/g, "&#x2026;");
    result = result.replace(/\\u2013/g, "&#x2013;");
    result = result.replace(/\\u2014/g, "&#x2014;");
    result = result.replace(/\\u00e9/g, "&#x00e9;");
    result = result.replace(/\\u00e1/g, "&#x00e1;");


    fs.writeFile(filepath, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}


function buildImages(path,prefix) {
  fs.mkdir('tmp', function() {});
  fs.readFile(path, 'utf8', function(err,data) {
      var performers = eval(data);
      performers.forEach(function(performer) {
        buildImageFromURL(performer.Name,performer.PhotoUrl,prefix);
      });
  });
}

function buildImageFromURL(name,url,prefix) {
  var filename = url.replace(/^.*[\\\/]/, '');
  var file = fs.createWriteStream("tmp/" + filename);
  var request = http.get(url, function(response) {
    console.log("Created: " + "tmp/" + filename);
    response.pipe(file);
    response.on('end', function () {
      buildThumbnail("tmp/" + filename, "assets/" + prefix + "-" + cleanStr(name) + "-300x300.jpg");
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

function buildThumbnail(imgSrc, imgDest, fill) {
  fill = fill || false;
  easyimg.thumbnail(
    {
     src: imgSrc,
     dst: imgDest,
     width:300, height:300,
     x:0, y:0,
     fill: fill
     },
    function(err, image) {
     if (err) {
      console.log("Error resizing: " + imgSrc);
      return;
     }
     smushit.smushit(imgDest);
     console.log("Resized and cropped: " + image.width + " x " + image.height + " | " + imgDest);
     // fs.unlink(imgSrc, function() {
     //  console.log("Deleted tmp file: " + imgSrc);
     // });
    }
  );
}

function cleanStr(string) {
  return string.replace(/\W/g, '').toLowerCase();
}



