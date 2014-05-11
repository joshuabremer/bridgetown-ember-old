console.log("=================================");
console.log("=== Building Venues ===");
console.log("=================================");

var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');

getVenueJSON('http://bridgetown.festivalthing.com/export/venues/json');
//getVenueJSON('http://127.0.0.1:8000/fixtures/festivalthing-venues.json');

var addresses = {
  "7608":{"Address":"4811 SE Hawthorne Blvd, Portland, OR 97215"},    
  "7609":{"Address":"4811 SE Hawthorne Blvd, Portland, OR 97215"}  ,    
  "7620":{"Address":"720 SE Hawthorne Blvd, Portland, OR 97214"}  ,    
  "7619":{"Address":"720 SE Hawthorne Blvd, Portland, OR 97214"}  ,    
  "7610":{"Address":"4801 SE Hawthorne Blvd, Portland, OR 97215"}  ,    
  "7611":{"Address":"722 East Burnside , Portland, OR 97214 "}  ,    
  "8571":{"Address":"5225 NE Martin Luther King Jr Blvd, Portland, OR 97211"}  ,    
  "7612":{"Address":"830 E Burnside St, Portland, OR 97214"}  ,    
  "7613":{"Address":"4904 SE Hawthorne Portland, OR 97215"}  ,    
  "7966":{"Address":"511 NW Couch St, Portland, OR 97209"}  ,    
  "7614":{"Address":"1507 SE 39th Ave, Portland, OR 97214"}  ,    
  "7615":{"Address":"1507 SE 39th Ave, Portland, OR 97214"}  ,    
  "7616":{"Address":"800 E Burnside St, Portland, OR 97214"}  ,    
  "7617":{"Address":"4825 SE Hawthorne Blvd, Portland, OR 97215"}  ,    
  "7618":{"Address":"1305 SE 8th Ave, Portland, OR 97214"}
};


function getVenueJSON(url, callback) {
  var file = fs.createWriteStream("assets/venues.json");

  fs.writeFileSync("assets/raw_venues.json",'','utf8');
  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("assets/raw_venues.json",chunk);
    });
    response.on('end', function (data) {
      sanitizeData("assets/raw_venues.json",function() {
        addEventIds("assets/raw_venues.json",function() {
        fs.writeFileSync("scripts/fixtures_venue.js","/*jshint -W100 */\nApp.Venue.FIXTURES = ",'utf8');
        fs.appendFileSync("scripts/fixtures_venue.js",getVenueData(),{encoding:'utf8'});
        fs.appendFileSync("scripts/fixtures_venue.js",";");
        console.log("Finished: " + "scripts/fixtures_venue.js");
        });
      });
      
      
    });
  });
  request.on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}


function getEventObject() {
  return eval(JSON.parse(getEventData()));
}

function getEventData() {
  return fs.readFileSync('assets/raw_events.json', 'utf8');
}

function getVenueObject() {
  return eval(getVenueData());
}

function getVenueData() {
  return fs.readFileSync('assets/raw_venues.json', 'utf8');
}


function addEventIds(filepath,callback) {
  var venueObj = getVenueObject();

  for (var key in venueObj) {
    venueObj[key].events = getEventsForVenue(venueObj[key].id)
  }
  fs.writeFile(filepath, JSON.stringify(venueObj, null, " "), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function getEventsForVenue(id) {
  var venueObj = getVenueObject();
  var eventObj = getEventObject();
  var returnArray = [];
  for (var key in eventObj) {
    var idCheck = parseInt(eventObj[key].VenueId,10);
    if (idCheck === parseInt(id,10) && doesEventExistForId(eventObj[key].EventId)) {
      returnArray.push(eventObj[key].EventId);
    }
  }
  return returnArray;
}

function doesEventExistForId(id) {
  var eventObj = getEventObject();
  id = parseInt(id,10);
  for (var key in eventObj) {
    var eventId = parseInt(eventObj[key].id,10);

    if (eventId === id) {
      return true;
    }
  }
  return
}


function sanitizeData(filepath, callback) {
  var venueObj = getVenueObject();

  for (var key in venueObj) {
    venueObj[key].id = venueObj[key].VenueId;
    venueObj[key].address = addresses[venueObj[key].id].Address;
    venueObj[key].pageUrl = venueObj[key].id + '-' + convertToSlug(venueObj[key].Name);
  }
  fs.writeFile(filepath, JSON.stringify(venueObj, null, " "), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
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


/*jshint -W100 */






