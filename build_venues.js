var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

getVenueJSON('http://bridgetown.festivalthing.com/export/venues/json');

function getVenueJSON(url, callback) {
  //var file = fs.createWriteStream("assets/venues.json");

  // fs.writeFileSync("assets/raw_venues.json",'','utf8');
  // var request = http.get(url, function(response) {
  //   //response.pipe(file);
  //   response.on('data', function (chunk) {
  //     fs.appendFileSync("assets/raw_venues.json",chunk);
  //   });
  //   response.on('end', function (data) {
      replaceVenueIdWithId("assets/raw_venues.json",function() {
            fs.writeFileSync("scripts/fixtures_venue.js","/*jshint -W100 */\nApp.Venue.FIXTURES = ",'utf8');
            fs.appendFileSync("scripts/fixtures_venue.js",getVenueData(),{encoding:'utf8'});
            fs.appendFileSync("scripts/fixtures_venue.js",";");
            console.log("Created: " + "scripts/fixtures_venue.js");
      });
      
      
      
  //   });
  // });
  // request.on('error', function(e) {
  //   console.log("Got error: " + e.message);
  // });
}


function getVenueObject() {
  return eval(getVenueData());
}

function getVenueData() {
  console.log(fs.readFileSync('assets/raw_venues.json', 'utf8'));
  return fs.readFileSync('assets/raw_venues.json', 'utf8');
}

function createPageUrls(filepath,callback) {
  var venueObj = getVenueObject();
  for (var key in venueObj) {
    venueObj[key].pageUrl = venueObj[key].id + '-' + convertToSlug(venueObj[key].Name);
  }
  fs.writeFile(filepath, JSON.stringify(venueObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
  
  
}


function replaceVenueIdWithId(filepath, callback) {
  fs.readFile(filepath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }

    var result = data.replace(/VenueId/g, "id");
    result = result.replace(/"}/g, '}');
    
    fs.writeFile(filepath, result, 'utf8', function (err) {
       if (err) return console.log(err);
       callback();
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
       callback();
    });
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


