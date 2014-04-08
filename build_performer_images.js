var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

getPerformerJSON('http://bridgetown.festivalthing.com/export/performers/json');

function getPerformerJSON(url, callback) {
  //var file = fs.createWriteStream("assets/performers.json");

  fs.writeFileSync("assets/raw_performers.json",'','utf8');
  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("assets/raw_performers.json",chunk);
    });
    response.on('end', function (data) {
      stringifyPerformerJSON("assets/raw_performers.json",function() {
        replacePerformerIdWithId("assets/raw_performers.json",function() {
          console.log('Done replacing ID');
          replaceApostrophes("assets/raw_performers.json",function() {
            console.log('Done replacing Apostrophes');
            createPageUrls("assets/raw_performers.json",function() {
              console.log('Done creating page URLs');
              addEventIds("assets/raw_performers.json",function() {
                console.log('Done adding Event IDs');
                fs.writeFileSync("scripts/fixtures_performer.js","/*jshint -W100 */\nApp.Performer.FIXTURES = ",'utf8');
                fs.appendFileSync("scripts/fixtures_performer.js",getPerformerData(),{encoding:'utf8'});
                fs.appendFileSync("scripts/fixtures_performer.js",";");
                console.log("Created: " + "scripts/fixtures_performer.js");
                buildImages("assets/raw_performers.json","performer");
              });
            });
          });
        });
      });
      
      
      
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}


function getPerformerObject() {
  return eval(JSON.parse(getPerformerData()));
}

function getPerformerData() {
  return fs.readFileSync('assets/raw_performers.json', 'utf8');
}

function getScheduleObject() {
  return eval(JSON.parse(getScheduleData()));
}

function getScheduleData() {
  return fs.readFileSync('assets/raw_schedules.json', 'utf8');
}

function stringifyPerformerJSON(filepath,callback) {
  var rawPerformerData = fs.readFileSync('assets/raw_performers.json', 'utf8');
  fs.writeFile(filepath, JSON.stringify(rawPerformerData), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function createPageUrls(filepath,callback) {
  var performerObj = getPerformerObject();
  for (var key in performerObj) {
    performerObj[key].pageUrl = performerObj[key].id + '-' + convertToSlug(performerObj[key].Name);
  }
  fs.writeFile(filepath, JSON.stringify(performerObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function addEventIds(filepath,callback) {
  var performerObj = getPerformerObject();
  var scheduleObj = getScheduleData();

  for (var key in performerObj) {
    performerObj[key].events = getEventsForPerformer(performerObj[key].id)
  }
  fs.writeFile(filepath, JSON.stringify(performerObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function getEventsForPerformer(id) {
  var scheduleObj = getScheduleObject();
  var returnArray = [];
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].PerformerId,10);
    if (idCheck === parseInt(id,10)) {
      returnArray.push(scheduleObj[key].EventId);
    }
  }
  return returnArray;
}


function replacePerformerIdWithId(filepath, callback) {
  var performerObj = getPerformerObject();

  for (var key in performerObj) {
    performerObj[key].id = performerObj[key].PerformerId
  }

  fs.writeFile(filepath, JSON.stringify(performerObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function replaceApostrophes(filepath, callback) {
  var performerObj = getPerformerObject();
  for (var key in performerObj) {
    performerObj[key].Bio = performerObj[key].Bio || "";
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2018/g, "&#x2018;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2019/g, "&#x2019;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201c/g, "&#x201c;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2033/g, "&#x2033;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u201d/g, "&#x201d;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00a0/g, " ");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2026/g, "&#x2026;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2013/g, "&#x2013;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u2014/g, "&#x2014;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e9/g, "&#x00e9;");
    performerObj[key].Bio = performerObj[key].Bio.replace(/\\u00e1/g, "&#x00e1;");
  }

  fs.writeFile(filepath, JSON.stringify(performerObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function buildImages(path,prefix) {
  fs.mkdir('tmp', function() {});
  fs.readFile(path, 'utf8', function(err,data) {
      var items = JSON.parse(data);
      items.forEach(function(item) {
        buildImageFromURL(item.Name,item.PhotoUrl,prefix);
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


function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}


