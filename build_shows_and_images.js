var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

//getShowJSON('http://bridgetown.festivalthing.com/export/submitted-shows/json');
getShowJSON('http://127.0.0.1:8000/fixtures/festivalthing-shows.json');


function getShowJSON(url, callback) {
  //var file = fs.createWriteStream("assets/performers.json");
  
  fs.writeFileSync("assets/raw_shows.json",'','utf8');
  
  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      //fs.appendFileSync("scripts/fixtures_show.js",chunk);
      fs.appendFileSync("assets/raw_shows.json",chunk);
    });
    response.on('end', function (data) {
      //fs.appendFileSync("scripts/fixtures_show.js",";");
      removeGremlins("assets/raw_shows.json", function() {
      replaceSubmittedIdWithId("assets/raw_shows.json",function() {
        createPageUrls("assets/raw_shows.json",function() {
          addEventIds("assets/raw_shows.json",function() {
          fs.writeFileSync("scripts/fixtures_show.js","/*jshint -W100 */\nApp.Show.FIXTURES = ",'utf8');
          fs.appendFileSync("scripts/fixtures_show.js",getShowData(),{encoding:'utf8'});
          fs.appendFileSync("scripts/fixtures_show.js",";");
          buildImages("assets/raw_shows.json","show");
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

function getShowObject() {
  return eval(getShowData());
}

function getShowData() {
  return fs.readFileSync('assets/raw_shows.json', 'utf8');
}

function getEventObject() {
  return eval(JSON.parse(getEventData()));
}

function getEventData() {
  return fs.readFileSync('assets/raw_events.json', 'utf8');
}

function removeGremlins(file, callback) {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/u2028/g, '');

    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.log(err);
       callback();
    });
  });
}

function createPageUrls(filepath,callback) {
  var showObj = getShowObject();
  for (var key in showObj) {
    showObj[key].pageUrl = showObj[key].id + '-' + convertToSlug(showObj[key].Name);
  }
  fs.writeFile(filepath, JSON.stringify(showObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function replaceSubmittedIdWithId(filepath, callback) {
  var showObj = getShowObject();
  for (var key in showObj) {
    showObj[key].id = showObj[key].SubmittedId;
  }
  fs.writeFile(filepath, JSON.stringify(showObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function addEventIds(filepath,callback) {
  var showObj = getShowObject();
  var eventObj = getEventData();

  for (var key in showObj) {
    showObj[key].events = getEventsForShow(showObj[key].id)
  }
  fs.writeFile(filepath, JSON.stringify(showObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function getEventsForShow(id) {
  var eventObj = getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].ShowId,10);
    if (idCheck === parseInt(id,10)) {
      returnArray.push(eventObj[key].id);
    }
  }
  return returnArray;
}

function buildImages(path,prefix) {
  fs.mkdir('tmp', function() {});
  fs.readFile(path, 'utf8', function(err, data) {
      var items = JSON.parse(data);
      items.forEach(function(item) {
        buildImageFromURL(item.Name, item.PhotoUrl, prefix);
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



