var http = require("http");
var fs = require("fs");
var easyimg = require("easyimage");
var smushit = require('node-smushit');
var moment = require('moment');

//getEventJSON('http://bridgetown.festivalthing.com/export/events/json');
getEventJSON('http://127.0.0.1:8000/fixtures/ajax-events.json');

function getEventJSON(url, callback) {
  var file = fs.createWriteStream("assets/raw_events.json");


  var request = http.get(url, function(response) {
    //response.pipe(file);
    response.on('data', function (chunk) {
      fs.appendFileSync("assets/raw_events.json",chunk);
    });
    response.on('end', function (data) {
    stringifyEventJSON("assets/raw_events.json",function() {
      console.log("Stringified file");
      sanitizeData("assets/raw_events.json",function() {
        console.log("Replaced event Ids");
        addPerformerIds("assets/raw_events.json",function() {
          addMCsIfTheyExist("assets/raw_events.json",function() {
          console.log("Grabbed performers");
            fs.writeFileSync("scripts/fixtures_event.js","/*jshint -W100 */\nApp.Event.FIXTURES = ",'utf8');
            fs.appendFileSync("scripts/fixtures_event.js",getEventData(),{encoding:'utf8'});
            fs.appendFileSync("scripts/fixtures_event.js",";");
            console.log("Created: " + "scripts/fixtures_event.js");
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

function getEventObject() {
  return eval(JSON.parse(getEventData()));
}

function getEventData() {
  return fs.readFileSync('assets/raw_events.json', 'utf8');
}

function getPerformerObject() {
  return eval(JSON.parse(getPerformerData()));
}

function getPerformerData() {
  return fs.readFileSync('assets/raw_performers.json', 'utf8');
}

function getScheduleObject() {
  return eval(getScheduleData());
}

function getScheduleData() {
  return fs.readFileSync('assets/raw_schedules.json', 'utf8');
}

function stringifyEventJSON(filepath,callback) {
  var rawEventData = fs.readFileSync('assets/raw_events.json', 'utf8');
  fs.writeFile(filepath, JSON.stringify(rawEventData), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function createPageUrls(filepath,callback) {
  var eventObj = getEventObject();
  for (var key in eventObj) {
    eventObj[key].pageUrl = eventObj[key].id + '-' + convertToSlug(eventObj[key].Name);
  }
  fs.writeFile(filepath, JSON.stringify(eventObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
  
  
}


function addPerformerIds(filepath,callback) {
  var eventObj = getEventObject();
  var scheduleObj = getScheduleData();

  for (var key in eventObj) {
    eventObj[key].performers = getPerformersForEvents(eventObj[key].id)
  }
  fs.writeFile(filepath, JSON.stringify(eventObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function getPerformersForEvents(id) {
  var scheduleObj = getScheduleObject();
  var returnArray = [];
  for (var key in scheduleObj) {
    var idCheck = parseInt(scheduleObj[key].EventId,10);
    if (idCheck === parseInt(id,10) && doesPerformerExistForId(scheduleObj[key].PerformerId)) {
      returnArray.push(scheduleObj[key].PerformerId);
    }
  }
  return returnArray;
}


function sanitizeData(filepath, callback) {
  var eventObj = getEventObject();

  for (var key in eventObj) {
    if (eventObj[key].ShowId !== "") {
      eventObj[key].show = eventObj[key].ShowId;
    }


    eventObj[key].id = eventObj[key].EventId;
    eventObj[key].venue = eventObj[key].VenueId;
    eventObj[key].start_time = moment(eventObj[key].StartTime.split(' to ')[0],'YYYY-MM-DD h:m:s').toISOString();
    eventObj[key].end_time = moment(eventObj[key].StartTime.split(' to ')[1],'YYYY-MM-DD h:m:s').toISOString();
  }

  eventObj = sortArray(eventObj,"start_time");

  fs.writeFile(filepath, JSON.stringify(eventObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function addMCsIfTheyExist(filepath, callback) {
  var eventObj = getEventObject();
  

  for (var key in eventObj) {
    var MCId = eventObj[key].MCId;
    if (!doesPerformerExistForId(MCId)) {
      console.log("Squelching MC: " + MCId);
      continue;
    }
    eventObj[key].MCId = eventObj[key].MCId;
    eventObj[key].emcees = [];
    if (parseInt(eventObj[key].MCId,10)) eventObj[key].emcees.push(parseInt(eventObj[key].MCId,10))
  }

  fs.writeFile(filepath, JSON.stringify(eventObj), 'utf8', function (err) {
     if (err) return console.log(err);
     callback();
  });
}

function doesPerformerExistForId(id) {
  var performerObj = getPerformerObject();
  id = parseInt(id,10);
  for (var key in performerObj) {
    var performerId = parseInt(performerObj[key].id,10);

    if (performerId === id) {
      return true;
    }
  }
  return
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

function sortArray(arr,key) {
  arr.sort(function(a, b){
    var keyA = a[key],
    keyB = b[key];
    // Compare the 2 dates
    if(keyA < keyB) return -1;
    if(keyA > keyB) return 1;
    return 0;
  });
  return arr;
}

