var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

//getVenueJSON('http://bridgetown.festivalthing.com/export/venues/json');
getVenueJSON('http://127.0.0.1:8000/fixtures/ajax-venues.json');

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
    result = data.replace(/"id":"/g, "id:");
    
    fs.writeFile(filepath, result, 'utf8', function (err) {
       if (err) return console.log(err);
       callback();
    });
  });
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


